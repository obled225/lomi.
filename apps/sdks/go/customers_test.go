// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestCustomersService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Customers == nil {
		t.Error("Service not initialized")
	}
}
