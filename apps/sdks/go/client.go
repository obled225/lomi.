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
func (s *AccountsService) List(params map[string]string) ([]Accounts, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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









// OrganizationsService handles organizations API operations
type OrganizationsService struct {
	client *Client
}


// List returns a list of organizations
func (s *OrganizationsService) List(params map[string]string) ([]Organizations, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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









// CustomersService handles customers API operations
type CustomersService struct {
	client *Client
}


// List returns a list of customers
func (s *CustomersService) List(params map[string]string) ([]Customers, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/customers", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single customers
func (s *CustomersService) Get(id string) (*Customers, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/customers/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new customers
func (s *CustomersService) Create(req CustomersCreate) (*Customers, error) {
	body, err := s.client.doRequest("POST", "/customers", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Update updates a customers
func (s *CustomersService) Update(id string, req CustomersUpdate) (*Customers, error) {
	body, err := s.client.doRequest("PATCH", fmt.Sprintf("/customers/%s", id), nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Customers
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Delete deletes a customers
func (s *CustomersService) Delete(id string) error {
	_, err := s.client.doRequest("DELETE", fmt.Sprintf("/customers/%s", id), nil, nil)
	return err
}



// PaymentRequestsService handles payment_requests API operations
type PaymentRequestsService struct {
	client *Client
}


// List returns a list of payment_requests
func (s *PaymentRequestsService) List(params map[string]string) ([]PaymentRequests, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payment-requests", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payment_requests
func (s *PaymentRequestsService) Get(id string) (*PaymentRequests, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-requests/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payment_requests
func (s *PaymentRequestsService) Create(req PaymentRequestsCreate) (*PaymentRequests, error) {
	body, err := s.client.doRequest("POST", "/payment-requests", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result PaymentRequests
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







// TransactionsService handles transactions API operations
type TransactionsService struct {
	client *Client
}


// List returns a list of transactions
func (s *TransactionsService) List(params map[string]string) ([]Transactions, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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









// RefundsService handles refunds API operations
type RefundsService struct {
	client *Client
}


// List returns a list of refunds
func (s *RefundsService) List(params map[string]string) ([]Refunds, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/refunds", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single refunds
func (s *RefundsService) Get(id string) (*Refunds, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/refunds/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new refunds
func (s *RefundsService) Create(req RefundsCreate) (*Refunds, error) {
	body, err := s.client.doRequest("POST", "/refunds", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Refunds
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







// ProductsService handles products API operations
type ProductsService struct {
	client *Client
}


// List returns a list of products
func (s *ProductsService) List(params map[string]string) ([]Products, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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







// SubscriptionsService handles subscriptions API operations
type SubscriptionsService struct {
	client *Client
}


// List returns a list of subscriptions
func (s *SubscriptionsService) List(params map[string]string) ([]Subscriptions, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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





// DiscountCouponsService handles discount_coupons API operations
type DiscountCouponsService struct {
	client *Client
}


// List returns a list of discount_coupons
func (s *DiscountCouponsService) List(params map[string]string) ([]DiscountCoupons, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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







// CheckoutSessionsService handles checkout_sessions API operations
type CheckoutSessionsService struct {
	client *Client
}


// List returns a list of checkout_sessions
func (s *CheckoutSessionsService) List(params map[string]string) ([]CheckoutSessions, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/checkout-sessions", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single checkout_sessions
func (s *CheckoutSessionsService) Get(id string) (*CheckoutSessions, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/checkout-sessions/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new checkout_sessions
func (s *CheckoutSessionsService) Create(req CheckoutSessionsCreate) (*CheckoutSessions, error) {
	body, err := s.client.doRequest("POST", "/checkout-sessions", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result CheckoutSessions
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







// PaymentLinksService handles payment_links API operations
type PaymentLinksService struct {
	client *Client
}


// List returns a list of payment_links
func (s *PaymentLinksService) List(params map[string]string) ([]PaymentLinks, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payment-links", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payment_links
func (s *PaymentLinksService) Get(id string) (*PaymentLinks, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payment-links/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payment_links
func (s *PaymentLinksService) Create(req PaymentLinksCreate) (*PaymentLinks, error) {
	body, err := s.client.doRequest("POST", "/payment-links", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result PaymentLinks
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







// PayoutsService handles payouts API operations
type PayoutsService struct {
	client *Client
}


// List returns a list of payouts
func (s *PayoutsService) List(params map[string]string) ([]Payouts, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
	body, err := s.client.doRequest("GET", "/payouts", query, nil)
	if err != nil {
		return nil, err
	}
	
	var result []Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return result, nil
}



// Get returns a single payouts
func (s *PayoutsService) Get(id string) (*Payouts, error) {
	body, err := s.client.doRequest("GET", fmt.Sprintf("/payouts/%s", id), nil, nil)
	if err != nil {
		return nil, err
	}
	
	var result Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}



// Create creates a new payouts
func (s *PayoutsService) Create(req PayoutsCreate) (*Payouts, error) {
	body, err := s.client.doRequest("POST", "/payouts", nil, req)
	if err != nil {
		return nil, err
	}
	
	var result Payouts
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}
	return &result, nil
}







// BeneficiaryPayoutsService handles beneficiary_payouts API operations
type BeneficiaryPayoutsService struct {
	client *Client
}


// List returns a list of beneficiary_payouts
func (s *BeneficiaryPayoutsService) List(params map[string]string) ([]BeneficiaryPayouts, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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







// WebhooksService handles webhooks API operations
type WebhooksService struct {
	client *Client
}


// List returns a list of webhooks
func (s *WebhooksService) List(params map[string]string) ([]Webhooks, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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





// WebhookDeliveryLogsService handles webhook_delivery_logs API operations
type WebhookDeliveryLogsService struct {
	client *Client
}


// List returns a list of webhook_delivery_logs
func (s *WebhookDeliveryLogsService) List(params map[string]string) ([]WebhookDeliveryLogs, error) {
	query := url.Values{}
	for k, v := range params {
		query.Set(k, v)
	}
	
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








