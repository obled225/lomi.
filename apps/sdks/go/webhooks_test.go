// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestWebhooksService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Webhooks == nil {
		t.Error("Service not initialized")
	}
}
