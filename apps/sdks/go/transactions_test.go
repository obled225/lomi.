// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestTransactionsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Transactions == nil {
		t.Error("Service not initialized")
	}
}
