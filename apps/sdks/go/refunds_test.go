// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestRefundsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Refunds == nil {
		t.Error("Service not initialized")
	}
}
