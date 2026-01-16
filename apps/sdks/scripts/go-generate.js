#!/usr/bin/env node
/**
 * Go SDK Generator
 * 
 * Generates Go SDK from TypeScript types using strongly-typed Structs
 * - Cleans up legacy files
 */

import { writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { parseApiConfig, parseSchema, toPascalCase } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../go');

console.log('🔨 Generating Go SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
	cwd: join(__dirname, '..'),
	stdio: 'inherit'
});

// Clean legacy files (anything starting with api_ or model_)
if (existsSync(outputDir)) {
	const files = readdirSync(outputDir);
	for (const file of files) {
		if (file.startsWith('api_') || file.startsWith('model_') || file.startsWith('docs')) {
			const p = join(outputDir, file);
			// rmSync(p, {recursive: true, force: true}); 
			// Be careful not to delete .git/ etc. if it was there, but it shouldn't be.
			// Just delete generated pattern
			if (existsSync(p)) rmSync(p, { recursive: true, force: true });
		}
	}
} else {
	mkdirSync(outputDir, { recursive: true });
}

// Parse config and schema
const resources = parseApiConfig();
const schema = parseSchema();

console.log(`✅ Found ${resources.length} API resources`);

function mapType(field) {
	let goType = 'interface{}';

	if (field.isEnum) {
		goType = 'string';
	} else if (field.type === 'string') {
		goType = 'string';
	} else if (field.type === 'number') {
		goType = 'float64';
	} else if (field.type === 'boolean') {
		goType = 'bool';
	} else if (field.type === 'json') {
		goType = 'map[string]interface{}';
	} else if (field.type === 'array') {
		goType = '[]string';
	}

	if (field.isOptional) {
		return `*${goType}`;
	}
	return goType;
}

// Generate models.go
function generateModels() {
	let content = `// Package lomi provides types for the Lomi API
// AUTO-GENERATED - Do not edit manually
package lomi

`;

	for (const r of resources) {
		const tableSchema = schema.tables[r.tableName];
		if (!tableSchema) continue;

		const structName = toPascalCase(r.tableName);

		// Row Struct
		content += `// ${structName} represents a ${r.tableName}\n`;
		content += `type ${structName} struct {\n`;
		for (const field of tableSchema.row) {
			content += `	${toPascalCase(field.name)} ${mapType(field)} \`json:"${field.name}"\`\n`;
		}
		content += `}\n\n`;

		// Create Struct
		if (tableSchema.insert.length > 0) {
			content += `// ${structName}Create represents the payload to create a ${r.tableName}\n`;
			content += `type ${structName}Create struct {\n`;
			for (const field of tableSchema.insert) {
				const type = mapType(field);
				const jsonTag = field.isOptional ? `\`json:"${field.name},omitempty"\`` : `\`json:"${field.name}"\``;
				content += `	${toPascalCase(field.name)} ${type} ${jsonTag}\n`;
			}
			content += `}\n\n`;
		}

		// Update Struct
		if (tableSchema.update.length > 0) {
			content += `// ${structName}Update represents the payload to update a ${r.tableName}\n`;
			content += `type ${structName}Update struct {\n`;
			for (const field of tableSchema.update) {
				const type = mapType({ ...field, isOptional: true });
				content += `	${toPascalCase(field.name)} ${type} \`json:"${field.name},omitempty"\`\n`;
			}
			content += `}\n\n`;
		}
	}

	return content;
}

writeFileSync(join(outputDir, 'models.go'), generateModels());

// Generate client.go 
const clientContent = `// Package lomi provides a Go client for the lomi. payment API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

const (
	DefaultBaseURL = "https://api.lomi.africa"
	SandboxBaseURL = "https://sandbox.api.lomi.africa"
)

// Client is the main lomi. API client
type Client struct {
	APIKey     string
	BaseURL    string
	HTTPClient *http.Client
${resources.map(r => `	${toPascalCase(r.tableName)} *${toPascalCase(r.tableName)}Service`).join('\n')}
}

// NewClient creates a new lomi. API client
func NewClient(apiKey string, opts ...ClientOption) *Client {
	c := &Client{
		APIKey:     apiKey,
		BaseURL:    DefaultBaseURL,
		HTTPClient: http.DefaultClient,
	}

	for _, opt := range opts {
		opt(c)
	}

	// Initialize services
${resources.map(r => `	c.${toPascalCase(r.tableName)} = &${toPascalCase(r.tableName)}Service{client: c}`).join('\n')}

	return c
}

// ClientOption is a function that configures the client
type ClientOption func(*Client)

// WithBaseURL sets the API base URL
func WithBaseURL(url string) ClientOption {
	return func(c *Client) {
		c.BaseURL = url
	}
}

// WithSandbox configures the client to use the sandbox environment
func WithSandbox() ClientOption {
	return func(c *Client) {
		c.BaseURL = SandboxBaseURL
	}
}

// WithHTTPClient sets a custom HTTP client
func WithHTTPClient(client *http.Client) ClientOption {
	return func(c *Client) {
		c.HTTPClient = client
	}
}

// Error represents an API error
type Error struct {
	StatusCode int
	Message    string
	Body       map[string]interface{}
}

func (e *Error) Error() string {
	return fmt.Sprintf("lomi API error (status %d): %s", e.StatusCode, e.Message)
}

func (c *Client) doRequest(method, path string, query url.Values, body interface{}) ([]byte, error) {
	u := c.BaseURL + path
	if query != nil {
		u += "?" + query.Encode()
	}

	var reqBody io.Reader
	if body != nil {
		jsonBody, err := json.Marshal(body)
		if err != nil {
			return nil, err
		}
		reqBody = bytes.NewReader(jsonBody)
	}

	req, err := http.NewRequest(method, u, reqBody)
	if err != nil {
		return nil, err
	}

	req.Header.Set("X-API-KEY", c.APIKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := c.HTTPClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	if resp.StatusCode >= 400 {
		return nil, &Error{
			StatusCode: resp.StatusCode,
			Message:    string(respBody),
		}
	}

	return respBody, nil
}

${resources.map(r => `
// ${toPascalCase(r.tableName)}Service handles ${r.tableName} API operations
type ${toPascalCase(r.tableName)}Service struct {
	client *Client
}

${r.operations.list ? `
// List returns a list of ${r.tableName}
func (s *${toPascalCase(r.tableName)}Service) List(params map[string]string) ([]${toPascalCase(r.tableName)}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/${r.tableName.replace(/_/g, '-')}", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []${toPascalCase(r.tableName)}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}
` : ''}

${r.operations.get ? `
// Get returns a single ${r.tableName}
func (s *${toPascalCase(r.tableName)}Service) Get(id string) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/${r.tableName.replace(/_/g, '-')}/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result ${toPascalCase(r.tableName)}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}
` : ''}

${r.operations.create ? `
// Create creates a new ${r.tableName}
func (s *${toPascalCase(r.tableName)}Service) Create(req ${toPascalCase(r.tableName)}Create) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("POST", "/${r.tableName.replace(/_/g, '-')}", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result ${toPascalCase(r.tableName)}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}
` : ''}

${r.operations.update ? `
// Update updates a ${r.tableName}
func (s *${toPascalCase(r.tableName)}Service) Update(id string, req ${toPascalCase(r.tableName)}Update) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/${r.tableName.replace(/_/g, '-')}/%s", id), nil, req)
	if err != nil {
		return nil, err
	}
	
	var result ${toPascalCase(r.tableName)}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}
` : ''}

${r.operations.delete ? `
// Delete deletes a ${r.tableName}
func (s *${toPascalCase(r.tableName)}Service) Delete(id string) error {
	_, err := s.client.doRequest("DELETE", fmt.Sprintf("/${r.tableName.replace(/_/g, '-')}/%s", id), nil, nil)
	return err
}
` : ''}
`).join('\n')}
`;

writeFileSync(join(outputDir, 'client.go'), clientContent);

// Generate go.mod if not exists
const goModPath = join(outputDir, 'go.mod');
if (!existsSync(goModPath)) {
	const goModContent = `module github.com/lomiafrica/lomi-go

go 1.21
`;
	writeFileSync(goModPath, goModContent);
}

console.log('✅ Go SDK generated successfully!');
