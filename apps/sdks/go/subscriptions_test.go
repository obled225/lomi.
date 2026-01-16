// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"testing"
)

func TestSubscriptionsService_Initialization(t *testing.T) {
	client := NewClient("test_key")
	if client.Subscriptions == nil {
		t.Error("Service not initialized")
	}
}
