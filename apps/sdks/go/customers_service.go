// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// CustomersService handles customers API operations
type CustomersService struct {
	client *Client
}


// List returns a list of customers
func (s *CustomersService) List(params map[string]string) ([]Customers, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/customers", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single customers
func (s *CustomersService) Get(id string) (*Customers, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/customers/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new customers
func (s *CustomersService) Create(req CustomersCreate) (*Customers, error) {
	body, err := s.client.doRequest("POST", "/customers", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Update updates a customers
func (s *CustomersService) Update(id string, req CustomersUpdate) (*Customers, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/customers/%s", id), nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Delete deletes a customers
func (s *CustomersService) Delete(id string) error {
	_, err := s.client.doRequest("DELETE", fmt.Sprintf("/customers/%s", id), nil, nil)
	return err
}

