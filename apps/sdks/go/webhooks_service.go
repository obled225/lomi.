// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// WebhooksService handles webhooks API operations
type WebhooksService struct {
	client *Client
}


// List returns a list of webhooks
func (s *WebhooksService) List(params map[string]string) ([]Webhooks, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/webhooks", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Webhooks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single webhooks
func (s *WebhooksService) Get(id string) (*Webhooks, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/webhooks/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Webhooks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





// Update updates a webhooks
func (s *WebhooksService) Update(id string, req WebhooksUpdate) (*Webhooks, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/webhooks/%s", id), nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Webhooks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



