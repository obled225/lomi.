// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// PaymentRequestsService handles payment_requests API operations
type PaymentRequestsService struct {
	client *Client
}


// List returns a list of payment_requests
func (s *PaymentRequestsService) List(params map[string]string) ([]PaymentRequests, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/payment-requests", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payment_requests
func (s *PaymentRequestsService) Get(id string) (*PaymentRequests, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-requests/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payment_requests
func (s *PaymentRequestsService) Create(req PaymentRequestsCreate) (*PaymentRequests, error) {
	body, err := s.client.doRequest("POST", "/payment-requests", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





