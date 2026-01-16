// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestBeneficiaryPayoutsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.BeneficiaryPayouts == nil {
		t.Error("Service not initialized")
	}
}
