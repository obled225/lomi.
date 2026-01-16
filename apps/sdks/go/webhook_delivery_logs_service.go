// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"encoding/json"
	"fmt"
)

// WebhookDeliveryLogsService handles webhook_delivery_logs API operations
type WebhookDeliveryLogsService struct {
	client *Client
}


// List returns a list of webhook_delivery_logs
func (s *WebhookDeliveryLogsService) List(params map[string]string) ([]WebhookDeliveryLogs, error) {
	query := paramsToQuery(params)
	body, err := s.client.doRequest("GET", "/webhook-delivery-logs", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []WebhookDeliveryLogs
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single webhook_delivery_logs
func (s *WebhookDeliveryLogsService) Get(id string) (*WebhookDeliveryLogs, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/webhook-delivery-logs/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result WebhookDeliveryLogs
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







