// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// DiscountCouponsService handles discount_coupons API operations
type DiscountCouponsService struct {
	client *Client
}


// List returns a list of discount_coupons
func (s *DiscountCouponsService) List(params map[string]string) ([]DiscountCoupons, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/discount-coupons", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []DiscountCoupons
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single discount_coupons
func (s *DiscountCouponsService) Get(id string) (*DiscountCoupons, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/discount-coupons/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result DiscountCoupons
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new discount_coupons
func (s *DiscountCouponsService) Create(req DiscountCouponsCreate) (*DiscountCoupons, error) {
	body, err := s.client.doRequest("POST", "/discount-coupons", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result DiscountCoupons
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





