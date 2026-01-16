// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestPayoutsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Payouts == nil {
		t.Error("Service not initialized")
	}
}
