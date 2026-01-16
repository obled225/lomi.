// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestPaymentLinksService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.PaymentLinks == nil {
		t.Error("Service not initialized")
	}
}
