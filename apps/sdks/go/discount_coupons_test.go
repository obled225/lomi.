// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestDiscountCouponsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.DiscountCoupons == nil {
		t.Error("Service not initialized")
	}
}
