#!/usr/bin/env node
/**
 * Go SDK Generator
 * 
 * Generates Go SDK from TypeScript types
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiConfigPath = join(__dirname, '../api-config.ts');
const outputDir = join(__dirname, '../go');

console.log('🔨 Generating Go SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
	cwd: join(__dirname, '..'),
	stdio: 'inherit'
});

function toPascalCase(str) {
	return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function toSnakeCase(str) {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

/**
 * Parse API config for resources
 */
function parseApiConfig(content) {
	const resourcesMatch = content.match(/export const API_RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
	if (!resourcesMatch) return [];

	const resources = [];
	const resourceBlocks = resourcesMatch[1].split(/\},\s*\{/);

	for (const block of resourceBlocks) {
		const tableNameMatch = block.match(/tableName:\s*['"](\w+)['"]/);
		const enabledMatch = block.match(/enabled:\s*(true|false)/);

		if (tableNameMatch && enabledMatch && enabledMatch[1] === 'true') {
			resources.push({
				tableName: tableNameMatch[1],
				structName: toPascalCase(tableNameMatch[1]),
			});
		}
	}
	return resources;
}

// Read config
const apiConfigContent = readFileSync(apiConfigPath, 'utf-8');
const resources = parseApiConfig(apiConfigContent);

console.log(`✅ Found ${resources.length} API resources`);

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
${resources.map(r => `	${r.structName} *${r.structName}Service`).join('\n')}
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
${resources.map(r => `	c.${r.structName} = &${r.structName}Service{client: c}`).join('\n')}

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
// ${r.structName}Service handles ${r.tableName} API operations
type ${r.structName}Service struct {
	client *Client
}

// List returns a list of ${r.tableName}
func (s *${r.structName}Service) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/${r.tableName.replace(/_/g, '-')}", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single ${r.tableName.slice(0, -1)} by ID
func (s *${r.structName}Service) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/${r.tableName.replace(/_/g, '-')}/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}
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
console.log(`   📁 Output: ${outputDir}`);
