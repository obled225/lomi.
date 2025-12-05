import * as fs from 'fs';
import * as path from 'path';
import {
  API_RESOURCES,
  EXPOSED_FUNCTIONS,
  isEnumExposed,
} from '../../api-config';

/**
 * Extract table names from API config
 */
function getExposedTableNames(): string[] {
  return API_RESOURCES.filter((r) => r.enabled).map((r) => r.tableName);
}

/**
 * Extract a complete function definition using balanced brace matching
 */
function extractFunctionDefinition(
  content: string,
  functionName: string,
): string | null {
  // Find the function start: "functionName: {"
  const functionStartRegex = new RegExp(`^\\s*${functionName}:\\s*\\{`, 'm');
  const startMatch = content.match(functionStartRegex);

  if (!startMatch) {
    return null;
  }

  // Start from the beginning of the match (includes function name)
  const startIndex = startMatch.index!;
  // Find the opening brace position
  const braceIndex = startIndex + startMatch[0].length - 1;
  let braceCount = 1;
  let i = braceIndex + 1;

  // Find the matching closing brace
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }

  if (braceCount === 0) {
    // Return from startIndex to include function name and closing brace
    // Check if there's a semicolon after the closing brace and include it
    let endIndex = i;
    while (endIndex < content.length && /\s/.test(content[endIndex])) {
      endIndex++;
    }
    if (content[endIndex] === ';') {
      endIndex++;
    }
    return content.substring(startIndex, endIndex);
  }

  return null;
}

/**
 * Extract a complete table definition using balanced brace matching
 */
function extractTableDefinition(
  content: string,
  tableName: string,
): string | null {
  // Find the table start: "tableName: {"
  const tableStartRegex = new RegExp(`^\\s*${tableName}:\\s*\\{`, 'm');
  const startMatch = content.match(tableStartRegex);

  if (!startMatch) {
    return null;
  }

  // Start from the beginning of the match (includes table name)
  const startIndex = startMatch.index!;
  // Find the opening brace position
  const braceIndex = startIndex + startMatch[0].length - 1;
  let braceCount = 1;
  let i = braceIndex + 1;

  // Find the matching closing brace
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }

  if (braceCount === 0) {
    // Return from startIndex to include table name
    return content.substring(startIndex, i);
  }

  return null;
}

/**
 * Extract enum definitions from the Enums section
 */
function extractEnums(databaseTypesContent: string): Record<string, string> {
  const enums: Record<string, string> = {};

  // Find the Enums section - look for "Enums: {" and find matching closing brace
  const enumsStartRegex = /Enums:\s*\{/;
  const startMatch = databaseTypesContent.match(enumsStartRegex);

  if (!startMatch) {
    throw new Error('Could not find Enums section');
  }

  const startIndex = startMatch.index! + startMatch[0].length - 1; // Position at opening brace
  let braceCount = 1;
  let i = startIndex + 1;

  // Find matching closing brace
  while (i < databaseTypesContent.length && braceCount > 0) {
    if (databaseTypesContent[i] === '{') braceCount++;
    if (databaseTypesContent[i] === '}') braceCount--;
    i++;
  }

  const enumsContent = databaseTypesContent.substring(startIndex + 1, i - 1);

  // Extract each enum - handle both single-line and multi-line enum values
  // Pattern: enumName: value; (where value can span multiple lines)
  const lines = enumsContent.split('\n');
  let currentEnum: { name: string; value: string[] } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) continue;

    // Check if this line starts a new enum: "enumName:"
    const enumStartMatch = trimmed.match(/^(\w+):\s*(.*)$/);
    if (enumStartMatch) {
      // Save previous enum if exists
      if (currentEnum && isEnumExposed(currentEnum.name)) {
        enums[currentEnum.name] = currentEnum.value.join('\n').trim();
      }

      // Start new enum
      const enumName = enumStartMatch[1];
      const valueStart = enumStartMatch[2];
      currentEnum = {
        name: enumName,
        value: valueStart ? [valueStart] : [],
      };

      // Check if value ends on same line
      if (valueStart.includes(';')) {
        if (isEnumExposed(enumName)) {
          enums[enumName] = valueStart.replace(/;$/, '').trim();
        }
        currentEnum = null;
      }
    } else if (currentEnum) {
      // Continue current enum value
      currentEnum.value.push(trimmed);

      // Check if this line ends the enum
      if (trimmed.includes(';')) {
        if (isEnumExposed(currentEnum.name)) {
          enums[currentEnum.name] = currentEnum.value
            .join('\n')
            .replace(/;$/, '')
            .trim();
        }
        currentEnum = null;
      }
    }
  }

  // Save last enum if exists
  if (currentEnum && isEnumExposed(currentEnum.name)) {
    enums[currentEnum.name] = currentEnum.value.join('\n').trim();
  }

  return enums;
}

/**
 * Extract table types from database types file
 */
function extractTables(
  databaseTypesContent: string,
  tableNames: string[],
): Record<string, string> {
  const tables: Record<string, string> = {};

  // Find the Tables section
  const tablesStartRegex = /Tables:\s*\{/;
  const startMatch = databaseTypesContent.match(tablesStartRegex);

  if (!startMatch) {
    throw new Error('Could not find Tables section');
  }

  // Extract Tables section content
  const startIndex = startMatch.index! + startMatch[0].length - 1;
  let braceCount = 1;
  let i = startIndex + 1;

  while (i < databaseTypesContent.length && braceCount > 0) {
    if (databaseTypesContent[i] === '{') braceCount++;
    if (databaseTypesContent[i] === '}') braceCount--;
    i++;
  }

  const tablesContent = databaseTypesContent.substring(startIndex + 1, i - 1);

  // Extract each table definition
  for (const tableName of tableNames) {
    const tableDef = extractTableDefinition(tablesContent, tableName);
    if (tableDef) {
      tables[tableName] = tableDef;
    } else {
      console.warn(`⚠️  Table "${tableName}" not found in database types`);
    }
  }

  return tables;
}

/**
 * Extract function types from database types file
 */
function extractFunctions(
  databaseTypesContent: string,
  functionNames: string[],
): Record<string, string> {
  const functions: Record<string, string> = {};

  // Find the Functions section
  const functionsStartRegex = /Functions:\s*\{/;
  const startMatch = databaseTypesContent.match(functionsStartRegex);

  if (!startMatch) {
    throw new Error('Could not find Functions section');
  }

  // Extract Functions section content
  const startIndex = startMatch.index! + startMatch[0].length - 1;
  let braceCount = 1;
  let i = startIndex + 1;

  while (i < databaseTypesContent.length && braceCount > 0) {
    if (databaseTypesContent[i] === '{') braceCount++;
    if (databaseTypesContent[i] === '}') braceCount--;
    i++;
  }

  const functionsContent = databaseTypesContent.substring(
    startIndex + 1,
    i - 1,
  );

  // Extract each function definition
  for (const functionName of functionNames) {
    const functionDef = extractFunctionDefinition(
      functionsContent,
      functionName,
    );
    if (functionDef) {
      functions[functionName] = functionDef;
    } else {
      console.warn(
        `⚠️  Function "${functionName}" not found in database types`,
      );
    }
  }

  return functions;
}

/**
 * Replace Database enum references with APIEnums
 */
function replaceEnumReferences(content: string): string {
  return content.replace(
    /Database\["public"\]\["Enums"\]\["(\w+)"\]/g,
    'APIEnums["$1"]',
  );
}

/**
 * Transform optional parameters to accept null values
 * This allows service code to pass `value || null` for optional parameters
 */
function transformOptionalParametersToAcceptNull(functionDef: string): string {
  // Match optional parameters in Args section that are strings or enums
  // Pattern: p_param_name?: string OR p_param_name?: APIEnums["..."]

  // Split by Args section
  const argsMatch = functionDef.match(/(Args:\s*\{)([\s\S]*?)(\};?)/);

  if (!argsMatch) {
    return functionDef;
  }

  const beforeArgs = functionDef.substring(
    0,
    argsMatch.index! + argsMatch[1].length,
  );
  const argsContent = argsMatch[2];
  const afterArgs = functionDef.substring(
    argsMatch.index! + argsMatch[1].length + argsMatch[2].length,
  );

  // Transform optional parameters: add | null if not already present
  const transformedArgs = argsContent
    .split('\n')
    .map((line) => {
      // Match optional parameters: p_something?: type
      const optionalParamMatch = line.match(
        /^(\s*)(p_\w+\?:\s*)(string|number|boolean|Json|APIEnums\[[^\]]+\])(\s*;?\s*)$/,
      );

      if (optionalParamMatch) {
        const [, indent, paramDecl, type, ending] = optionalParamMatch;
        // Only add | null if it's not already there
        if (!ending.includes('null')) {
          return `${indent}${paramDecl}${type} | null${ending}`;
        }
      }

      // Match optional array parameters: p_something?: type[]
      const optionalArrayMatch = line.match(
        /^(\s*)(p_\w+\?:\s*)(string|APIEnums\[[^\]]+\])(\[\])(\s*;?\s*)$/,
      );

      if (optionalArrayMatch) {
        const [, indent, paramDecl, type, brackets, ending] =
          optionalArrayMatch;
        // Only add | null if it's not already there
        if (!ending.includes('null')) {
          return `${indent}${paramDecl}${type}${brackets} | null${ending}`;
        }
      }

      return line;
    })
    .join('\n');

  return beforeArgs + transformedArgs + afterArgs;
}

/**
 * Generate API types file content
 */
function generateAPITypes(
  enums: Record<string, string>,
  tables: Record<string, string>,
  functions: Record<string, string>,
): string {
  let content = `/**
 * API Types
 * 
 * This file contains only the types exposed through the API.
 * 
 * Generated from database.types.ts - only includes:
 * - Exposed enums (${Object.keys(enums).length} enums)
 * - Exposed tables (${Object.keys(tables).length} tables)
 * - Exposed functions (${Object.keys(functions).length} functions)
 * 
 * DO NOT EDIT MANUALLY - This file is auto-generated
 * Run: npm run generate:api-types
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
`;

  // Add tables
  for (const [, tableDef] of Object.entries(tables)) {
    const cleanedDef = replaceEnumReferences(tableDef);
    const lines = cleanedDef.split('\n');

    // Find the base indentation from the first line
    const baseIndent = lines[0]
      ? lines[0].length - lines[0].trimStart().length
      : 0;

    const indentedLines = lines
      .map((line, _idx) => {
        if (!line.trim()) return '';

        // Calculate relative indentation from the base
        const currentIndent = line.length - line.trimStart().length;
        const relativeIndent = currentIndent - baseIndent;

        // Target: 6 spaces base + relative indent
        const targetIndent = 6 + relativeIndent;

        return ' '.repeat(targetIndent) + line.trimStart();
      })
      .filter((line) => line.trim());

    content += indentedLines.join('\n');
    content += '\n';
  }

  content += `    };\n`;
  content += `    Functions: {\n`;

  // Add functions
  for (const [, functionDef] of Object.entries(functions)) {
    const cleanedDef = replaceEnumReferences(functionDef);
    // Transform optional parameters to accept null
    const transformedDef = transformOptionalParametersToAcceptNull(cleanedDef);
    const lines = transformedDef.split('\n');

    // Find the base indentation from the first line
    const baseIndent = lines[0]
      ? lines[0].length - lines[0].trimStart().length
      : 0;

    const indentedLines = lines
      .map((line, _idx) => {
        if (!line.trim()) return '';

        // Calculate relative indentation from the base
        const currentIndent = line.length - line.trimStart().length;
        const relativeIndent = currentIndent - baseIndent;

        // Target: 6 spaces base + relative indent
        const targetIndent = 6 + relativeIndent;

        return ' '.repeat(targetIndent) + line.trimStart();
      })
      .filter((line) => line.trim());

    const functionContent = indentedLines.join('\n');
    content += functionContent;
    content += '\n';
  }

  content += `    };\n`;
  content += `    Enums: {\n`;

  // Add enums
  for (const [enumName, enumValue] of Object.entries(enums)) {
    // Enums should have semicolons at the end since they're value types
    const lines = enumValue.split('\n');
    if (lines.length === 1) {
      // Single line enum
      content += `      ${enumName}: ${enumValue.trim()};\n`;
    } else {
      // Multi-line enum
      content += `      ${enumName}:\n`;
      lines.forEach((line) => {
        if (line.trim()) {
          content += `        ${line.trim()}\n`;
        }
      });
      if (!enumValue.trim().endsWith(';')) {
        content += ';';
      }
      content += '\n';
    }
  }

  content += `    };\n`;
  content += `  };\n`;
  content += `};\n\n`;

  // Add APIEnums type alias for easier access
  content += `/**
 * API Enums - Exposed enum types for API usage
 */
export type APIEnums = Database["public"]["Enums"];\n\n`;

  // Add helper types for each enum
  for (const enumName of Object.keys(enums)) {
    const typeName = enumName
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    content += `export type ${typeName} = APIEnums["${enumName}"];\n`;
  }

  return content;
}

/**
 * Main function to generate API types
 */
function main() {
  // Get the workspace root by finding the monorepo root
  // Start from current file location and go up until we find the workspace root
  let currentDir = __dirname;
  let workspaceRoot = currentDir;

  // Go up from apps/api/src/utils/scripts to find workspace root
  // Look for a marker like package.json at root or apps/ directory
  for (let i = 0; i < 6; i++) {
    const appsDir = path.join(currentDir, 'apps');
    if (fs.existsSync(appsDir)) {
      workspaceRoot = currentDir;
      break;
    }
    currentDir = path.dirname(currentDir);
  }

  const dashboardTypesPath = path.join(
    workspaceRoot,
    'apps/dashboard/src/lib/types/database.types.ts',
  );
  const outputPath = path.join(__dirname, '../../utils/types/api.ts');

  console.log('📖 Reading database types from:', dashboardTypesPath);

  if (!fs.existsSync(dashboardTypesPath)) {
    throw new Error(`Database types file not found: ${dashboardTypesPath}`);
  }

  const databaseTypesContent = fs.readFileSync(dashboardTypesPath, 'utf-8');

  console.log('🔍 Extracting exposed enums...');
  const enums = extractEnums(databaseTypesContent);
  console.log(
    `✅ Found ${Object.keys(enums).length} exposed enums:`,
    Object.keys(enums).join(', '),
  );

  console.log('🔍 Extracting exposed tables...');
  const tableNames = getExposedTableNames();
  console.log(
    `✅ Found ${tableNames.length} exposed tables:`,
    tableNames.join(', '),
  );

  const tables = extractTables(databaseTypesContent, tableNames);
  console.log(`✅ Extracted ${Object.keys(tables).length} table definitions`);

  console.log('🔍 Extracting exposed functions...');
  console.log(
    `✅ Found ${EXPOSED_FUNCTIONS.length} exposed functions:`,
    EXPOSED_FUNCTIONS.join(', '),
  );

  const functions = extractFunctions(databaseTypesContent, EXPOSED_FUNCTIONS);
  console.log(
    `✅ Extracted ${Object.keys(functions).length} function definitions`,
  );

  console.log('📝 Generating API types file...');
  const apiTypesContent = generateAPITypes(enums, tables, functions);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, apiTypesContent, 'utf-8');
  console.log(`✅ Generated API types file at: ${outputPath}`);
  console.log(
    `📊 Summary: ${Object.keys(enums).length} enums, ${Object.keys(tables).length} tables, ${Object.keys(functions).length} functions`,
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error('❌ Error generating API types:', error);
    process.exit(1);
  }
}
