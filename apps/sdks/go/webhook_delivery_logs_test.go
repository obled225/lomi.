// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestWebhookDeliveryLogsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.WebhookDeliveryLogs == nil {
		t.Error("Service not initialized")
	}
}
