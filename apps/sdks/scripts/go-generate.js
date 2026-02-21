#!/usr/bin/env node
/**
 * Go SDK Generator
 * 
 * Generates Go SDK from TypeScript types using strongly-typed Structs
 * - Flat package structure
 * - Modular files: configuration, response, utils, client, models, services
 * - Comprehensive Tests
 */

import { writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { parseApiConfig, parseSchema, toPascalCase, toSnakeCase } from './utils.js';

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

// Ensure output directory exists 
if (!existsSync(outputDir)) {
	mkdirSync(outputDir, { recursive: true });
}

// Clean docs if they exist
const docsDir = join(outputDir, 'docs');
if (existsSync(docsDir)) {
	rmSync(docsDir, { recursive: true, force: true });
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

// 1. Generate models.go
function generateModels() {
	let content = `// Package lomi provides types for the lomi. API
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

		// Create Struct (Insert)
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

// 2. Generate configuration.go
const configContent = `// Package lomi provides types for the lomi. API
// AUTO-GENERATED - Do not edit manually
package lomi

import "net/http"

const (
	DefaultBaseURL = "https://api.lomi.africa"
	SandboxBaseURL = "https://sandbox.api.lomi.africa"
)

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
`;
writeFileSync(join(outputDir, 'configuration.go'), configContent);

// 3. Generate response.go
const responseContent = `// Package lomi provides types for the lomi. API
// AUTO-GENERATED - Do not edit manually
package lomi

import "fmt"

// Error represents an API error
type Error struct {
	StatusCode int
	Message    string
	Body       map[string]interface{}
}

func (e *Error) Error() string {
	return fmt.Sprintf("lomi API error (status %d): %s", e.StatusCode, e.Message)
}
`;
writeFileSync(join(outputDir, 'response.go'), responseContent);

// 4. Generate utils.go
const utilsContent = `// Package lomi provides types for the lomi. API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"net/url"
)

// paramsToQuery converts a map of parameters to url.Values
func paramsToQuery(params map[string]string) url.Values {
	query := url.Values{}
	for k, v := range params {
		query.Add(k, v)
	}
	return query
}
`;
writeFileSync(join(outputDir, 'utils.go'), utilsContent);

// 5. Generate client.go (Cleaner now)
const clientContent = `// Package lomi provides a Go client for the lomi. payment API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/url"
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
`;
writeFileSync(join(outputDir, 'client.go'), clientContent);

// 6. Generate Individual Services (Using utils)
for (const r of resources) {
	const serviceName = `${toPascalCase(r.tableName)}Service`;
	const serviceFileName = `${toSnakeCase(r.tableName)}_service.go`;
	const urlPath = r.tableName.replace(/_/g, '-');

	const content = `// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// ${serviceName} handles ${r.tableName} API operations
type ${serviceName} struct {
	client *Client
}

${r.operations.list ? `
// List returns a list of ${r.tableName}
func (s *${serviceName}) List(params map[string]string) ([]${toPascalCase(r.tableName)}, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/${urlPath}", query, nil)
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
func (s *${serviceName}) Get(id string) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/${urlPath}/%s", id), nil, nil)
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
func (s *${serviceName}) Create(req ${toPascalCase(r.tableName)}Create) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("POST", "/${urlPath}", nil, req)
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
func (s *${serviceName}) Update(id string, req ${toPascalCase(r.tableName)}Update) (*${toPascalCase(r.tableName)}, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/${urlPath}/%s", id), nil, req)
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
func (s *${serviceName}) Delete(id string) error {
	_, err := s.client.doRequest("DELETE", fmt.Sprintf("/${urlPath}/%s", id), nil, nil)
	return err
}
` : ''}
`;
	writeFileSync(join(outputDir, serviceFileName), content);
}


// 7. Genearate Tests
const clientTestContent = `package lomi

import (
	"testing"
)

func TestNewClient(t *testing.T) {
	apiKey := "test_key"
	client := NewClient(apiKey)

	if client.APIKey != apiKey {
		t.Errorf("Expected API key %s, got %s", apiKey, client.APIKey)
	}

	if client.BaseURL != DefaultBaseURL {
		t.Errorf("Expected base URL %s, got %s", DefaultBaseURL, client.BaseURL)
	}
}

func TestWithSandbox(t *testing.T) {
	client := NewClient("test_key", WithSandbox())

	if client.BaseURL != SandboxBaseURL {
		t.Errorf("Expected sandbox URL %s, got %s", SandboxBaseURL, client.BaseURL)
	}
}
`;
writeFileSync(join(outputDir, 'client_test.go'), clientTestContent);


// individual service tests
for (const r of resources) {
	const testFileName = `${toSnakeCase(r.tableName)}_test.go`;
	const serviceStruct = `${toPascalCase(r.tableName)}Service`;

	const content = `// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func Test${serviceStruct}_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.${toPascalCase(r.tableName)} == nil {
		t.Error("Service not initialized")
	}
}
`;
	writeFileSync(join(outputDir, testFileName), content);
}


// Generate go.mod (if missing)
const goModPath = join(outputDir, 'go.mod');
if (!existsSync(goModPath)) {
	const goModContent = `module github.com/lomiafrica/lomi-go

go 1.21
`;
	writeFileSync(goModPath, goModContent);
}

console.log('✅ Go SDK generated successfully!');
