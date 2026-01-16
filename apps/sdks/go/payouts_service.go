// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// PayoutsService handles payouts API operations
type PayoutsService struct {
	client *Client
}


// List returns a list of payouts
func (s *PayoutsService) List(params map[string]string) ([]Payouts, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/payouts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payouts
func (s *PayoutsService) Get(id string) (*Payouts, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payouts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payouts
func (s *PayoutsService) Create(req PayoutsCreate) (*Payouts, error) {
	body, err := s.client.doRequest("POST", "/payouts", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





