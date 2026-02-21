// Package lomi provides types for the lomi. API
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
