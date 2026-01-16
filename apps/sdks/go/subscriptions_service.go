// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// SubscriptionsService handles subscriptions API operations
type SubscriptionsService struct {
	client *Client
}


// List returns a list of subscriptions
func (s *SubscriptionsService) List(params map[string]string) ([]Subscriptions, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/subscriptions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Subscriptions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single subscriptions
func (s *SubscriptionsService) Get(id string) (*Subscriptions, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/subscriptions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Subscriptions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





// Update updates a subscriptions
func (s *SubscriptionsService) Update(id string, req SubscriptionsUpdate) (*Subscriptions, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/subscriptions/%s", id), nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Subscriptions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



