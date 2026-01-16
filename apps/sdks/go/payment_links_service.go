// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// PaymentLinksService handles payment_links API operations
type PaymentLinksService struct {
	client *Client
}


// List returns a list of payment_links
func (s *PaymentLinksService) List(params map[string]string) ([]PaymentLinks, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/payment-links", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payment_links
func (s *PaymentLinksService) Get(id string) (*PaymentLinks, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-links/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payment_links
func (s *PaymentLinksService) Create(req PaymentLinksCreate) (*PaymentLinks, error) {
	body, err := s.client.doRequest("POST", "/payment-links", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





