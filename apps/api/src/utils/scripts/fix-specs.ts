import * as fs from 'fs';
import * as path from 'path';
import { API_RESOURCES } from '@/api-config';

const PROJECT_ROOT = path.join(__dirname, '../../../');
const SRC_ROOT = path.join(PROJECT_ROOT, 'src');
const CORE_ROOT = path.join(SRC_ROOT, 'core');

function toCamelCase(str: string, capitalizeFirst: boolean = false): string {
  const camel = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
  return capitalizeFirst ? camel.charAt(0).toUpperCase() + camel.slice(1) : camel;
}

function toKebabCase(str: string): string {
  return str.replace(/_/g, '-');
}

function generateServiceSpec(serviceName: string, kebabName: string): string {
  return `import { Test, TestingModule } from '@nestjs/testing';
import { ${serviceName} } from './${kebabName}.service';
import { SupabaseService } from '@utils/supabase/supabase.service';

describe('${serviceName}', () => {
  let service: ${serviceName};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ${serviceName},
        {
          provide: SupabaseService,
          useValue: {
            getClient: jest.fn(() => ({
              from: jest.fn(() => ({
                select: jest.fn(() => ({
                  single: jest.fn(),
                  eq: jest.fn(() => ({ single: jest.fn() })),
                })),
                insert: jest.fn(() => ({
                  select: jest.fn(() => ({ single: jest.fn() })),
                })),
              })),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<${serviceName}>(${serviceName});
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
`;
}

function generateControllerSpec(controllerName: string, serviceName: string, kebabName: string): string {
  return `import { Test, TestingModule } from '@nestjs/testing';
import { ${controllerName} } from './${kebabName}.controller';
import { ${serviceName} } from './${kebabName}.service';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';

describe('${controllerName}', () => {
  let controller: ${controllerName};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${controllerName}],
      providers: [
        {
          provide: ${serviceName},
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(ApiKeyGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<${controllerName}>(${controllerName});
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
`;
}

function main() {
  console.log('🔧 Fixing Spec Files...');

  for (const resource of API_RESOURCES) {
    if (!resource.enabled) continue;
    if (resource.tableName === 'transactions') continue;

    const tableName = resource.tableName;
    const kebabName = toKebabCase(tableName);
    const camelName = toCamelCase(tableName, true);

    const serviceName = `${camelName}Service`;
    const controllerName = `${camelName}Controller`;

    const moduleDir = path.join(CORE_ROOT, kebabName);
    
    // Fix Service Spec
    const serviceSpecPath = path.join(moduleDir, `${kebabName}.service.spec.ts`);
    if (fs.existsSync(serviceSpecPath)) {
        fs.writeFileSync(serviceSpecPath, generateServiceSpec(serviceName, kebabName));
        console.log(`✅ Fixed ${kebabName}.service.spec.ts`);
    }

    // Fix Controller Spec
    const controllerSpecPath = path.join(moduleDir, `${kebabName}.controller.spec.ts`);
    if (fs.existsSync(controllerSpecPath)) {
        fs.writeFileSync(controllerSpecPath, generateControllerSpec(controllerName, serviceName, kebabName));
        console.log(`✅ Fixed ${kebabName}.controller.spec.ts`);
    }
  }
}

main();
