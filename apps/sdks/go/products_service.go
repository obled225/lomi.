// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// ProductsService handles products API operations
type ProductsService struct {
	client *Client
}


// List returns a list of products
func (s *ProductsService) List(params map[string]string) ([]Products, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/products", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Products
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single products
func (s *ProductsService) Get(id string) (*Products, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/products/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Products
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new products
func (s *ProductsService) Create(req ProductsCreate) (*Products, error) {
	body, err := s.client.doRequest("POST", "/products", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Products
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





