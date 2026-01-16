// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// AccountsService handles accounts API operations
type AccountsService struct {
	client *Client
}


// List returns a list of accounts
func (s *AccountsService) List(params map[string]string) ([]Accounts, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/accounts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Accounts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single accounts
func (s *AccountsService) Get(id string) (*Accounts, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/accounts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Accounts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







