// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// RefundsService handles refunds API operations
type RefundsService struct {
	client *Client
}


// List returns a list of refunds
func (s *RefundsService) List(params map[string]string) ([]Refunds, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/refunds", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single refunds
func (s *RefundsService) Get(id string) (*Refunds, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/refunds/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new refunds
func (s *RefundsService) Create(req RefundsCreate) (*Refunds, error) {
	body, err := s.client.doRequest("POST", "/refunds", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





