// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestAccountsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Accounts == nil {
		t.Error("Service not initialized")
	}
}
