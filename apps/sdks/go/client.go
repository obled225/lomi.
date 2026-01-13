// Package lomi provides a Go client for the lomi. payment API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

const (
	DefaultBaseURL = "https://api.lomi.africa"
	SandboxBaseURL = "https://sandbox.api.lomi.africa"
)

// Client is the main lomi. API client
type Client struct {
	APIKey     string
	BaseURL    string
	HTTPClient *http.Client
	Accounts *AccountsService
	Organizations *OrganizationsService
	Customers *CustomersService
	PaymentRequests *PaymentRequestsService
	Transactions *TransactionsService
	Refunds *RefundsService
	Products *ProductsService
	Subscriptions *SubscriptionsService
	DiscountCoupons *DiscountCouponsService
	CheckoutSessions *CheckoutSessionsService
	PaymentLinks *PaymentLinksService
	Payouts *PayoutsService
	BeneficiaryPayouts *BeneficiaryPayoutsService
	Webhooks *WebhooksService
	WebhookDeliveryLogs *WebhookDeliveryLogsService
}

// NewClient creates a new lomi. API client
func NewClient(apiKey string, opts ...ClientOption) *Client {
	c := &Client{
		APIKey:     apiKey,
		BaseURL:    DefaultBaseURL,
		HTTPClient: http.DefaultClient,
	}

	for _, opt := range opts {
		opt(c)
	}

	// Initialize services
	c.Accounts = &AccountsService{client: c}
	c.Organizations = &OrganizationsService{client: c}
	c.Customers = &CustomersService{client: c}
	c.PaymentRequests = &PaymentRequestsService{client: c}
	c.Transactions = &TransactionsService{client: c}
	c.Refunds = &RefundsService{client: c}
	c.Products = &ProductsService{client: c}
	c.Subscriptions = &SubscriptionsService{client: c}
	c.DiscountCoupons = &DiscountCouponsService{client: c}
	c.CheckoutSessions = &CheckoutSessionsService{client: c}
	c.PaymentLinks = &PaymentLinksService{client: c}
	c.Payouts = &PayoutsService{client: c}
	c.BeneficiaryPayouts = &BeneficiaryPayoutsService{client: c}
	c.Webhooks = &WebhooksService{client: c}
	c.WebhookDeliveryLogs = &WebhookDeliveryLogsService{client: c}

	return c
}

// ClientOption is a function that configures the client
type ClientOption func(*Client)

// WithBaseURL sets the API base URL
func WithBaseURL(url string) ClientOption {
	return func(c *Client) {
		c.BaseURL = url
	}
}

// WithSandbox configures the client to use the sandbox environment
func WithSandbox() ClientOption {
	return func(c *Client) {
		c.BaseURL = SandboxBaseURL
	}
}

// WithHTTPClient sets a custom HTTP client
func WithHTTPClient(client *http.Client) ClientOption {
	return func(c *Client) {
		c.HTTPClient = client
	}
}

// Error represents an API error
type Error struct {
	StatusCode int
	Message    string
	Body       map[string]interface{}
}

func (e *Error) Error() string {
	return fmt.Sprintf("lomi API error (status %d): %s", e.StatusCode, e.Message)
}

func (c *Client) doRequest(method, path string, query url.Values, body interface{}) ([]byte, error) {
	u := c.BaseURL + path
	if query != nil {
		u += "?" + query.Encode()
	}

	var reqBody io.Reader
	if body != nil {
		jsonBody, err := json.Marshal(body)
		if err != nil {
			return nil, err
		}
		reqBody = bytes.NewReader(jsonBody)
	}

	req, err := http.NewRequest(method, u, reqBody)
	if err != nil {
		return nil, err
	}

	req.Header.Set("X-API-KEY", c.APIKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := c.HTTPClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	if resp.StatusCode >= 400 {
		return nil, &Error{
			StatusCode: resp.StatusCode,
			Message:    string(respBody),
		}
	}

	return respBody, nil
}


// AccountsService handles accounts API operations
type AccountsService struct {
	client *Client
}

// List returns a list of accounts
func (s *AccountsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/accounts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single account by ID
func (s *AccountsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/accounts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// OrganizationsService handles organizations API operations
type OrganizationsService struct {
	client *Client
}

// List returns a list of organizations
func (s *OrganizationsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/organizations", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single organization by ID
func (s *OrganizationsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/organizations/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// CustomersService handles customers API operations
type CustomersService struct {
	client *Client
}

// List returns a list of customers
func (s *CustomersService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/customers", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single customer by ID
func (s *CustomersService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/customers/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// PaymentRequestsService handles payment_requests API operations
type PaymentRequestsService struct {
	client *Client
}

// List returns a list of payment_requests
func (s *PaymentRequestsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payment-requests", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single payment_request by ID
func (s *PaymentRequestsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-requests/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// TransactionsService handles transactions API operations
type TransactionsService struct {
	client *Client
}

// List returns a list of transactions
func (s *TransactionsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/transactions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single transaction by ID
func (s *TransactionsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/transactions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// RefundsService handles refunds API operations
type RefundsService struct {
	client *Client
}

// List returns a list of refunds
func (s *RefundsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/refunds", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single refund by ID
func (s *RefundsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/refunds/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// ProductsService handles products API operations
type ProductsService struct {
	client *Client
}

// List returns a list of products
func (s *ProductsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/products", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single product by ID
func (s *ProductsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/products/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// SubscriptionsService handles subscriptions API operations
type SubscriptionsService struct {
	client *Client
}

// List returns a list of subscriptions
func (s *SubscriptionsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/subscriptions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single subscription by ID
func (s *SubscriptionsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/subscriptions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// DiscountCouponsService handles discount_coupons API operations
type DiscountCouponsService struct {
	client *Client
}

// List returns a list of discount_coupons
func (s *DiscountCouponsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/discount-coupons", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single discount_coupon by ID
func (s *DiscountCouponsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/discount-coupons/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// CheckoutSessionsService handles checkout_sessions API operations
type CheckoutSessionsService struct {
	client *Client
}

// List returns a list of checkout_sessions
func (s *CheckoutSessionsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/checkout-sessions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single checkout_session by ID
func (s *CheckoutSessionsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/checkout-sessions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// PaymentLinksService handles payment_links API operations
type PaymentLinksService struct {
	client *Client
}

// List returns a list of payment_links
func (s *PaymentLinksService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payment-links", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single payment_link by ID
func (s *PaymentLinksService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-links/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// PayoutsService handles payouts API operations
type PayoutsService struct {
	client *Client
}

// List returns a list of payouts
func (s *PayoutsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payouts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single payout by ID
func (s *PayoutsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payouts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// BeneficiaryPayoutsService handles beneficiary_payouts API operations
type BeneficiaryPayoutsService struct {
	client *Client
}

// List returns a list of beneficiary_payouts
func (s *BeneficiaryPayoutsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/beneficiary-payouts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single beneficiary_payout by ID
func (s *BeneficiaryPayoutsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/beneficiary-payouts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// WebhooksService handles webhooks API operations
type WebhooksService struct {
	client *Client
}

// List returns a list of webhooks
func (s *WebhooksService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/webhooks", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single webhook by ID
func (s *WebhooksService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/webhooks/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}


// WebhookDeliveryLogsService handles webhook_delivery_logs API operations
type WebhookDeliveryLogsService struct {
	client *Client
}

// List returns a list of webhook_delivery_logs
func (s *WebhookDeliveryLogsService) List(params map[string]string) ([]map[string]interface{}, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/webhook-delivery-logs", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Get returns a single webhook_delivery_log by ID
func (s *WebhookDeliveryLogsService) Get(id string) (map[string]interface{}, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/webhook-delivery-logs/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}

