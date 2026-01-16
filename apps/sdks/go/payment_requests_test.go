// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestPaymentRequestsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.PaymentRequests == nil {
		t.Error("Service not initialized")
	}
}
