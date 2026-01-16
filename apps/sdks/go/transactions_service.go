// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// TransactionsService handles transactions API operations
type TransactionsService struct {
	client *Client
}


// List returns a list of transactions
func (s *TransactionsService) List(params map[string]string) ([]Transactions, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/transactions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Transactions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single transactions
func (s *TransactionsService) Get(id string) (*Transactions, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/transactions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Transactions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







