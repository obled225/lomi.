// Package lomi provides a Go client for the lomi. payment API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/url"
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

func (c *Client) doRequest(method, path string, query url.Values, body interface{}) ([]byte, error) {
	baseURL, err := url.Parse(c.BaseURL)
	if err != nil {
		return nil, err
	}
	ref, err := url.Parse(path)
	if err != nil {
		return nil, err
	}
	u := baseURL.ResolveReference(ref).String()

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
