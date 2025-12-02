import * as fs from 'fs';
import * as path from 'path';
import { API_RESOURCES, APIResourceConfig } from '../src/api-config';

const PROJECT_ROOT = path.join(__dirname, '../');
const SRC_ROOT = path.join(PROJECT_ROOT, 'src');
const DB_TYPES_PATH = path.join(SRC_ROOT, 'types/database.types.ts');

// Helper to convert snake_case to CamelCase
function toCamelCase(str: string, capitalizeFirst: boolean = false): string {
  const camel = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
  return capitalizeFirst
    ? camel.charAt(0).toUpperCase() + camel.slice(1)
    : camel;
}

// Helper to convert snake_case to kebab-case
function toKebabCase(str: string): string {
  return str.replace(/_/g, '-');
}

interface TableDefinition {
  properties: Record<string, string>;
}

function parseDatabaseTypes(): Record<string, TableDefinition> {
  const content = fs.readFileSync(DB_TYPES_PATH, 'utf8');
  const definitions: Record<string, TableDefinition> = {};

  // Extract Tables block
  const tablesBlockMatch = content.match(
    /Tables:\s*\{([\s\S]*?)\n\s{4}\}(?=\s*(?:Views|Functions|Enums))/,
  );
  let tablesBlock: string;
  if (!tablesBlockMatch) {
    // Fallback
    const fallbackMatch = content.match(/Tables:\s*\{([\s\S]*?)\n\s{4}\}/);
    if (!fallbackMatch) return {};
    tablesBlock = fallbackMatch[1];
  } else {
    tablesBlock = tablesBlockMatch[1];
  }

  // Split by table
  const tableRegex =
    /^\s{6}([a-z0-9_]+): \{[\s\S]*?Row: \{([\s\S]*?)\n\s{8}\}/gm;
  let match;

  while ((match = tableRegex.exec(tablesBlock)) !== null) {
    const tableName = match[1];
    const rowContent = match[2];
    const properties: Record<string, string> = {};

    // Parse properties
    // Example: account_id: string;
    // Example: amount: number | null;
    const propRegex = /^\s{10}([a-z0-9_]+): (.*);/gm;
    let propMatch;
    while ((propMatch = propRegex.exec(rowContent)) !== null) {
      properties[propMatch[1]] = propMatch[2];
    }

    definitions[tableName] = { properties };
  }

  return definitions;
}

function generateDtoContent(
  className: string,
  properties: Record<string, string>,
): string {
  const imports = ["import { ApiProperty } from '@nestjs/swagger';"];
  const lines = [`export class ${className} {`];

  for (const [name, type] of Object.entries(properties)) {
    // Skip internal fields for CreateDTOs if needed, but for now we include all
    // We might want to exclude id, created_at, updated_at for CreateDTO

    let tsType = 'string';
    let example = "'string'";

    if (type.includes('number')) {
      tsType = 'number';
      example = '123';
    } else if (type.includes('boolean')) {
      tsType = 'boolean';
      example = 'true';
    } else if (type.includes('Json')) {
      tsType = 'any';
      example = '{}';
    }

    // Clean up type definition from DB types (remove nulls for DTOs or keep them?)
    // For simplicity, we'll just use the basic type

    lines.push(`  @ApiProperty({ example: ${example} })`);
    lines.push(`  ${name}: ${tsType};`);
    lines.push('');
  }

  lines.push('}');
  return imports.join('\n') + '\n\n' + lines.join('\n');
}

function generateServiceContent(
  className: string,
  tableName: string,
  dtoName: string,
  responseDtoName: string,
  idField: string,
  properties: Record<string, string>,
): string {
  const hasOrganizationId = 'organization_id' in properties;
  const hasMerchantId = 'merchant_id' in properties;
  const hasCreatedBy = 'created_by' in properties; // Sometimes used as merchant_id

  let tenancyFilter = '';
  let insertAugmentation = '';

  if (hasOrganizationId) {
    tenancyFilter = `.eq('organization_id', user.organizationId)`;
    insertAugmentation = `organization_id: user.organizationId,`;
  } else if (hasMerchantId) {
    tenancyFilter = `.eq('merchant_id', user.merchantId)`;
    insertAugmentation = `merchant_id: user.merchantId,`;
  } else if (hasCreatedBy) {
    tenancyFilter = `.eq('created_by', user.merchantId)`;
    insertAugmentation = `created_by: user.merchantId,`;
  }

  return `import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { ${dtoName} } from './dto/create-${toKebabCase(tableName.slice(0, -1))}.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class ${className} {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: ${dtoName}, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('${tableName}')
      .insert({
        ...createDto,
        ${insertAugmentation}
      } as any)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('${tableName}')
      .select('*')
      ${tenancyFilter};

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('${tableName}')
      .select('*')
      .eq('${idField}', id)
      ${tenancyFilter}
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
`;
}

function generateControllerContent(
  controllerName: string,
  serviceName: string,
  serviceFileName: string,
  tableName: string,
  dtoName: string,
  responseDtoName: string,
  resource: APIResourceConfig,
): string {
  const singularName = tableName.endsWith('s')
    ? tableName.slice(0, -1)
    : tableName;
  const kebabSingular = toKebabCase(singularName);

  return `import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { ${serviceName} } from './${serviceFileName}';
import { ${dtoName} } from './dto/create-${kebabSingular}.dto';
import { ${responseDtoName} } from './dto/${kebabSingular}-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('${resource.tag || toCamelCase(tableName, true)}')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('${tableName}')
export class ${controllerName} {
  constructor(private readonly service: ${serviceName}) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ${singularName}' })
  @ApiResponse({
    status: 201,
    description: 'The ${singularName} has been successfully created.',
    type: ${responseDtoName},
  })
  create(@Body() createDto: ${dtoName}, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'List all ${tableName}' })
  @ApiResponse({
    status: 200,
    description: 'List of ${tableName}',
    type: [${responseDtoName}],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ${singularName}' })
  @ApiResponse({
    status: 200,
    description: 'The ${singularName}',
    type: ${responseDtoName},
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
`;
}

async function main() {
  console.log('🚀 Starting Module Generation...');

  const dbDefinitions = parseDatabaseTypes();
  console.log(
    `📊 Parsed ${Object.keys(dbDefinitions).length} table definitions.`,
  );

  for (const resource of API_RESOURCES) {
    if (!resource.enabled) continue;

    // Skip if transactions or checkout_sessions (already done manually)
    if (
      resource.tableName === 'transactions' ||
      resource.tableName === 'checkout_sessions'
    ) {
      console.log(`⏩ Skipping ${resource.tableName} (already exists)`);
      continue;
    }

    const tableName = resource.tableName;
    const singularName = tableName.endsWith('s')
      ? tableName.slice(0, -1)
      : tableName;
    const kebabName = toKebabCase(tableName);
    const kebabSingular = toKebabCase(singularName);
    const camelName = toCamelCase(tableName, true);
    const camelSingular = toCamelCase(singularName, true);

    const _moduleName = `${camelName}Module`;
    const controllerName = `${camelName}Controller`;
    const serviceName = `${camelName}Service`;
    const dtoName = `Create${camelSingular}Dto`;
    const responseDtoName = `${camelSingular}ResponseDto`;

    console.log(`\n📦 Generating module for ${tableName}...`);

    // 1. Generate NestJS Resource (Module, Controller, Service)
    try {
      // Using execSync to run nest CLI
      // We run module, controller, service separately to avoid interactive prompts of 'resource'
      // execSync(`npx nest g module ${kebabName}`, { cwd: PROJECT_ROOT, stdio: 'inherit' });
      // execSync(`npx nest g controller ${kebabName}`, { cwd: PROJECT_ROOT, stdio: 'inherit' });
      // execSync(`npx nest g service ${kebabName}`, { cwd: PROJECT_ROOT, stdio: 'inherit' });
    } catch (e) {
      console.error(`❌ Failed to scaffold ${tableName}`, e);
      continue;
    }

    // 2. Generate DTOs
    const dtoDir = path.join(SRC_ROOT, kebabName, 'dto');
    if (!fs.existsSync(dtoDir)) fs.mkdirSync(dtoDir);

    const tableDef = dbDefinitions[tableName];
    if (!tableDef) {
      console.warn(
        `⚠️  No table definition found for ${tableName}. Generating empty DTOs.`,
      );
    }

    const properties = tableDef ? tableDef.properties : {};

    // Filter properties for CreateDTO (exclude id, created_at, updated_at)
    const createProperties = { ...properties };
    delete createProperties[resource.idField || 'id'];
    delete createProperties['created_at'];
    delete createProperties['updated_at'];
    delete createProperties['created_by']; // Usually handled by auth

    const createDtoContent = generateDtoContent(dtoName, createProperties);
    fs.writeFileSync(
      path.join(dtoDir, `create-${kebabSingular}.dto.ts`),
      createDtoContent,
    );

    const responseDtoContent = generateDtoContent(responseDtoName, properties);
    fs.writeFileSync(
      path.join(dtoDir, `${kebabSingular}-response.dto.ts`),
      responseDtoContent,
    );

    // 3. Overwrite Service
    const serviceContent = generateServiceContent(
      serviceName,
      tableName,
      dtoName,
      responseDtoName,
      resource.idField || 'id',
      properties,
    );
    fs.writeFileSync(
      path.join(SRC_ROOT, kebabName, `${kebabName}.service.ts`),
      serviceContent,
    );

    // 4. Overwrite Controller
    const controllerContent = generateControllerContent(
      controllerName,
      serviceName,
      `${kebabName}.service`,
      tableName,
      dtoName,
      responseDtoName,
      resource,
    );
    fs.writeFileSync(
      path.join(SRC_ROOT, kebabName, `${kebabName}.controller.ts`),
      controllerContent,
    );

    console.log(`✅ ${tableName} module generated successfully!`);
  }
}

void main();
