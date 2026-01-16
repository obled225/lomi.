// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestCheckoutSessionsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.CheckoutSessions == nil {
		t.Error("Service not initialized")
	}
}
