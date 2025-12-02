import * as fs from 'fs';
import * as path from 'path';
import { API_RESOURCES } from './api-config';

const typesPath = path.join(__dirname, 'types/database.types.ts');

async function listTables() {
  try {
    const content = fs.readFileSync(typesPath, 'utf8');

    // Find the content inside "Tables: {" up to "Views: {" or "Functions: {" or end of file
    const tablesBlockMatch = content.match(
      /Tables:\s*\{([\s\S]*?)\n\s{4}\}(?=\s*(?:Views|Functions|Enums))/,
    );

    let match;
    if (!tablesBlockMatch) {
      // Try matching until the closing brace of Tables if Views/Functions are not immediately following
      // This handles the case where Tables is the last item or followed by something else
      const fallbackMatch = content.match(/Tables:\s*\{([\s\S]*?)\n\s{4}\}/);
      if (!fallbackMatch) {
        console.error('Could not parse Tables block from database.types.ts');
        return;
      }
      match = fallbackMatch;
    } else {
      match = tablesBlockMatch;
    }

    const tablesBlock = match[1];

    // Now match keys inside the block. They are usually indented by 6 spaces.
    // key: {
    const tableRegex = /^\s{6}([a-z0-9_]+): \{/gm;
    const tables: string[] = [];
    let tableMatch;

    while ((tableMatch = tableRegex.exec(tablesBlock)) !== null) {
      tables.push(tableMatch[1]);
    }

    console.log('📊 Found Tables in database.types.ts:');
    console.log('-----------------------------------');
    tables.sort().forEach((t) => console.log(`- ${t}`));
    console.log('-----------------------------------');
    console.log(`Total: ${tables.length} tables`);

    // Check against api-config
    const configuredTables = new Set(
      API_RESOURCES.map((r) => r.tableName),
    );

    console.log('\n⚠️  Tables NOT in api-config.ts:');
    const missing = tables.filter((t) => !configuredTables.has(t));
    if (missing.length === 0) {
      console.log('✅ All tables are configured!');
    } else {
      missing.forEach((t) => console.log(`- ${t}`));
    }
  } catch (error) {
    console.error('Error reading database types:', error);
  }
}

void listTables();
