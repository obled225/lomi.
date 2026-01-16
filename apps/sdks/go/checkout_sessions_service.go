// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// CheckoutSessionsService handles checkout_sessions API operations
type CheckoutSessionsService struct {
	client *Client
}


// List returns a list of checkout_sessions
func (s *CheckoutSessionsService) List(params map[string]string) ([]CheckoutSessions, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/checkout-sessions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single checkout_sessions
func (s *CheckoutSessionsService) Get(id string) (*CheckoutSessions, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/checkout-sessions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new checkout_sessions
func (s *CheckoutSessionsService) Create(req CheckoutSessionsCreate) (*CheckoutSessions, error) {
	body, err := s.client.doRequest("POST", "/checkout-sessions", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





