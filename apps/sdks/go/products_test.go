// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestProductsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Products == nil {
		t.Error("Service not initialized")
	}
}
