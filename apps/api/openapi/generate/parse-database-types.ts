import * as ts from 'typescript';
import * as fs from 'fs';

export interface TableSchema {
  tableName: string;
  row: Record<string, PropertyInfo>;
  insert: Record<string, PropertyInfo>;
  update: Record<string, PropertyInfo>;
}

export interface PropertyInfo {
  type: string;
  format?: string;
  enum?: string[];
  nullable: boolean;
  required: boolean;
  description?: string;
}

export interface EnumDefinition {
  name: string;
  values: string[];
}

export function parseDatabaseTypes(filePath: string): {
  tables: Map<string, TableSchema>;
  enums: Map<string, EnumDefinition>;
} {
  const sourceCode = fs.readFileSync(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile(
    'database.types.ts',
    sourceCode,
    ts.ScriptTarget.Latest,
    true,
  );

  const tables = new Map<string, TableSchema>();
  const enums = new Map<string, EnumDefinition>();

  function visit(node: ts.Node) {
    if (ts.isTypeAliasDeclaration(node) && node.name.text === 'Database') {
      const type = node.type;
      if (ts.isTypeLiteralNode(type)) {
        extractTables(type, tables);
        extractEnums(type, enums);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return { tables, enums };
}

function extractTables(
  databaseType: ts.TypeLiteralNode,
  tables: Map<string, TableSchema>,
) {
  const publicProp = databaseType.members.find(
    (member): member is ts.PropertySignature =>
      ts.isPropertySignature(member) &&
      ts.isIdentifier(member.name) &&
      member.name.text === 'public',
  );

  if (
    !publicProp ||
    !publicProp.type ||
    !ts.isTypeLiteralNode(publicProp.type)
  ) {
    return;
  }

  const tablesProp = publicProp.type.members.find(
    (member): member is ts.PropertySignature =>
      ts.isPropertySignature(member) &&
      ts.isIdentifier(member.name) &&
      member.name.text === 'Tables',
  );

  if (
    !tablesProp ||
    !tablesProp.type ||
    !ts.isTypeLiteralNode(tablesProp.type)
  ) {
    return;
  }

  tablesProp.type.members.forEach((member) => {
    if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
      const tableName = member.name.text;
      const tableType = member.type;

      if (tableType && ts.isTypeLiteralNode(tableType)) {
        const schema = extractTableSchema(tableName, tableType);
        if (schema) {
          tables.set(tableName, schema);
        }
      }
    }
  });
}

  function extractTableSchema(
  tableName: string,
  tableNode: ts.TypeLiteralNode,
): TableSchema | null {
  const schema: TableSchema = {
    tableName,
    row: {},
    insert: {},
    update: {},
  };

  tableNode.members.forEach((member) => {
    if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
      const propName = member.name.text;

      if (
        propName === 'Row' &&
        member.type &&
        ts.isTypeLiteralNode(member.type)
      ) {
        schema.row = extractProperties(member.type, false);
      } else if (
        propName === 'Insert' &&
        member.type &&
        ts.isTypeLiteralNode(member.type)
      ) {
        schema.insert = extractProperties(member.type, true);
      } else if (
        propName === 'Update' &&
        member.type &&
        ts.isTypeLiteralNode(member.type)
      ) {
        schema.update = extractProperties(member.type, true);
      }
    }
  });

  return schema;
}

function extractProperties(
  typeNode: ts.TypeLiteralNode,
  isOptional: boolean,
): Record<string, PropertyInfo> {
  const properties: Record<string, PropertyInfo> = {};

  typeNode.members.forEach((member) => {
    if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
      const propertyName = member.name.text;
      const propertyType = member.type;
      const required = !member.questionToken && !isOptional;

      if (propertyType) {
        const typeInfo = extractTypeInfo(propertyType);
        properties[propertyName] = {
          ...typeInfo,
          required,
        };
      }
    }
  });

  return properties;
}

function extractTypeInfo(
  typeNode: ts.TypeNode,
): Omit<PropertyInfo, 'required'> {
  const info: Omit<PropertyInfo, 'required'> = {
    type: 'string',
    nullable: false,
  };

  if (ts.isUnionTypeNode(typeNode)) {
    const types = typeNode.types;
    const nonNullTypes = types.filter((t) => !isNullType(t));

    if (types.length > nonNullTypes.length) {
      info.nullable = true;
    }

    if (nonNullTypes.length > 0) {
      const primaryType = nonNullTypes[0];
      Object.assign(info, extractSimpleType(primaryType));
    }

    return info;
  }

  return { ...info, ...extractSimpleType(typeNode) };
}

function extractSimpleType(typeNode: ts.TypeNode): Partial<PropertyInfo> {
  if (ts.isIndexedAccessTypeNode(typeNode)) {
    return { type: 'string' }; // Enums are strings
  }
  if (ts.isLiteralTypeNode(typeNode)) {
    if (ts.isStringLiteral(typeNode.literal)) {
      return {
        type: 'string',
        enum: [typeNode.literal.text],
      };
    }
    if (ts.isNumericLiteral(typeNode.literal)) {
      return { type: 'number' };
    }
    if (
      typeNode.literal.kind === ts.SyntaxKind.TrueKeyword ||
      typeNode.literal.kind === ts.SyntaxKind.FalseKeyword
    ) {
      return { type: 'boolean' };
    }
  }

  if (typeNode.kind === ts.SyntaxKind.StringKeyword) {
    return { type: 'string' };
  }
  if (typeNode.kind === ts.SyntaxKind.NumberKeyword) {
    return { type: 'number', format: 'double' };
  }
  if (typeNode.kind === ts.SyntaxKind.BooleanKeyword) {
    return { type: 'boolean' };
  }

  if (typeNode.kind === ts.SyntaxKind.UnknownKeyword) {
    return { type: 'object' };
  }
  if (ts.isTypeReferenceNode(typeNode) && ts.isIdentifier(typeNode.typeName)) {
    if (typeNode.typeName.text === 'Json') {
      return { type: 'object' };
    }
  }

  return { type: 'string' };
}

function isNullType(typeNode: ts.TypeNode): boolean {
  return typeNode.kind === ts.SyntaxKind.NullKeyword;
}

function extractEnums(
  databaseType: ts.TypeLiteralNode,
  enums: Map<string, EnumDefinition>,
) {
  const publicProp = databaseType.members.find(
    (member): member is ts.PropertySignature =>
      ts.isPropertySignature(member) &&
      ts.isIdentifier(member.name) &&
      member.name.text === 'public',
  );

  if (
    !publicProp ||
    !publicProp.type ||
    !ts.isTypeLiteralNode(publicProp.type)
  ) {
    return;
  }

  const enumsProp = publicProp.type.members.find(
    (member): member is ts.PropertySignature =>
      ts.isPropertySignature(member) &&
      ts.isIdentifier(member.name) &&
      member.name.text === 'Enums',
  );

  if (!enumsProp || !enumsProp.type || !ts.isTypeLiteralNode(enumsProp.type)) {
    return;
  }

  enumsProp.type.members.forEach((member) => {
    if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
      const enumName = member.name.text;
      const enumType = member.type;

      if (enumType && ts.isUnionTypeNode(enumType)) {
        const values: string[] = [];
        enumType.types.forEach((typeNode) => {
          if (
            ts.isLiteralTypeNode(typeNode) &&
            ts.isStringLiteral(typeNode.literal)
          ) {
            values.push(typeNode.literal.text);
          }
        });

        if (values.length > 0) {
          enums.set(enumName, { name: enumName, values });
        }
      }
    }
  });
}

export function tableSchemaToOpenAPI(table: TableSchema) {
  return {
    [table.tableName]: {
      type: 'object',
      description: `${table.tableName} object`,
      properties: propertiesToOpenAPI(table.row),
    },
    [`${table.tableName}_create`]: {
      type: 'object',
      description: `Create ${table.tableName} input`,
      required: Object.entries(table.insert)
        .filter(([_, prop]) => prop.required)
        .map(([name]) => name),
      properties: propertiesToOpenAPI(table.insert),
    },
    [`${table.tableName}_update`]: {
      type: 'object',
      description: `Update ${table.tableName} input`,
      properties: propertiesToOpenAPI(table.update),
    },
  };
}

function propertiesToOpenAPI(
  properties: Record<string, PropertyInfo>,
): Record<string, any> {
  const result: Record<string, any> = {};

  Object.entries(properties).forEach(([name, prop]) => {
    const schema: any = {
      type: prop.type,
    };

    if (prop.format) {
      schema.format = prop.format;
    }

    if (prop.enum) {
      schema.enum = prop.enum;
    }

    if (prop.nullable) {
      schema.nullable = true;
    }

    if (prop.description) {
      schema.description = prop.description;
    }

    if (name.includes('_id') || name === 'id') {
      schema.format = 'uuid';
    }

    if (name.includes('email')) {
      schema.format = 'email';
    }

    if (name.includes('url') || name.includes('uri')) {
      schema.format = 'uri';
    }

    if (name.includes('_at') || name === 'timestamp') {
      schema.format = 'date-time';
    }

    result[name] = schema;
  });

  return result;
}
