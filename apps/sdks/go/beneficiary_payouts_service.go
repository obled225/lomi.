// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// BeneficiaryPayoutsService handles beneficiary_payouts API operations
type BeneficiaryPayoutsService struct {
	client *Client
}


// List returns a list of beneficiary_payouts
func (s *BeneficiaryPayoutsService) List(params map[string]string) ([]BeneficiaryPayouts, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/beneficiary-payouts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []BeneficiaryPayouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single beneficiary_payouts
func (s *BeneficiaryPayoutsService) Get(id string) (*BeneficiaryPayouts, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/beneficiary-payouts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result BeneficiaryPayouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new beneficiary_payouts
func (s *BeneficiaryPayoutsService) Create(req BeneficiaryPayoutsCreate) (*BeneficiaryPayouts, error) {
	body, err := s.client.doRequest("POST", "/beneficiary-payouts", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result BeneficiaryPayouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}





