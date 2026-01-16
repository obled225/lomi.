// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// OrganizationsService handles organizations API operations
type OrganizationsService struct {
	client *Client
}


// List returns a list of organizations
func (s *OrganizationsService) List(params map[string]string) ([]Organizations, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/organizations", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Organizations
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single organizations
func (s *OrganizationsService) Get(id string) (*Organizations, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/organizations/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Organizations
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







