package lomi

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
