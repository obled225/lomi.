#!/bin/bash

# Incremental API Endpoints Test Script
# Tests endpoints one service at a time with pause between services
# Interactive mode stops on errors to allow fixing one by one

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
API_URL="${API_URL:-http://localhost:3000}"
API_KEY="${API_KEY:-}"
INTERACTIVE="${INTERACTIVE:-true}"  # Set to false to run all without stopping
PAUSE_BETWEEN_SERVICES="${PAUSE_BETWEEN_SERVICES:-1}"  # seconds

if [ -z "$API_KEY" ]; then
  echo -e "${RED}Error: API_KEY environment variable is not set${NC}"
  echo "Usage: export API_KEY='your-api-key' && ./test-all-endpoints.sh"
  exit 1
fi

echo -e "${BLUE}=== Lomi API Incremental Endpoint Testing ===${NC}"
echo "API URL: $API_URL"
echo "API Key: ${API_KEY:0:20}..."
if [ "$INTERACTIVE" = "true" ]; then
  echo -e "${CYAN}Mode: Interactive (will pause on errors)${NC}"
else
  echo -e "${CYAN}Mode: Non-interactive (will test all)${NC}"
fi
echo ""

# Track results
PASSED=0
FAILED=0
FAILED_ENDPOINTS=()
ERRORS_JSON=()
CURRENT_SERVICE=""
OUTPUT_FILE="${OUTPUT_FILE:-api-errors.json}"

# Track created resources for use in subsequent tests
CREATED_CUSTOMER_ID=""
CREATED_PRODUCT_ID=""
CREATED_PRICE_ID=""
CREATED_PAYMENT_LINK_ID=""
CREATED_PAYMENT_REQUEST_ID=""
CREATED_COUPON_ID=""
CREATED_CHECKOUT_SESSION_ID=""
CREATED_TRANSACTION_ID=""  # Will need to be set manually or via mock transaction

# Helper function to test endpoint
test_endpoint() {
  local method=$1
  local endpoint=$2
  local data=$3
  local description=$4
  
  if [ -n "$data" ]; then
    response=$(curl -s -w "\n%{http_code}" -X $method \
      -H "X-API-KEY: $API_KEY" \
      -H "Content-Type: application/json" \
      -d "$data" \
      "$API_URL$endpoint" 2>/dev/null)
  else
    response=$(curl -s -w "\n%{http_code}" -X $method \
      -H "X-API-KEY: $API_KEY" \
      "$API_URL$endpoint" 2>/dev/null)
  fi
  
  http_code=$(echo "$response" | tail -n1)
  body=$(echo "$response" | sed '$d')
  
  if [ "$http_code" -ge 200 ] && [ "$http_code" -lt 300 ]; then
    echo -e "${GREEN}✓${NC} $description (HTTP $http_code)"
    
    # Extract IDs from successful POST responses for use in subsequent tests
    if [ "$method" = "POST" ] && [ "$http_code" -ge 200 ] && [ "$http_code" -lt 300 ]; then
      # Try to extract common ID fields from JSON response
      # Handle both single objects and arrays
      if echo "$body" | grep -q '"customer_id"'; then
        CREATED_CUSTOMER_ID=$(echo "$body" | grep -oE '"customer_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_CUSTOMER_ID" ] && CREATED_CUSTOMER_ID=$(echo "$body" | grep -oE '"customer_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
      if echo "$body" | grep -q '"product_id"'; then
        CREATED_PRODUCT_ID=$(echo "$body" | grep -oE '"product_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_PRODUCT_ID" ] && CREATED_PRODUCT_ID=$(echo "$body" | grep -oE '"product_id":"[^"]*"' | head -1 | cut -d'"' -f4)
        # Also try to get price_id if present (from prices array)
        if echo "$body" | grep -q '"price_id"'; then
          CREATED_PRICE_ID=$(echo "$body" | grep -oE '"price_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
          [ -z "$CREATED_PRICE_ID" ] && CREATED_PRICE_ID=$(echo "$body" | grep -oE '"price_id":"[^"]*"' | head -1 | cut -d'"' -f4)
        fi
      fi
      if echo "$body" | grep -q '"link_id"'; then
        CREATED_PAYMENT_LINK_ID=$(echo "$body" | grep -oE '"link_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_PAYMENT_LINK_ID" ] && CREATED_PAYMENT_LINK_ID=$(echo "$body" | grep -oE '"link_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
      if echo "$body" | grep -q "request_id"; then
        CREATED_PAYMENT_REQUEST_ID=$(echo "$body" | grep -oE '"request_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_PAYMENT_REQUEST_ID" ] && CREATED_PAYMENT_REQUEST_ID=$(echo "$body" | grep -oE '"request_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
      if echo "$body" | grep -q "coupon_id"; then
        CREATED_COUPON_ID=$(echo "$body" | grep -oE '"coupon_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_COUPON_ID" ] && CREATED_COUPON_ID=$(echo "$body" | grep -oE '"coupon_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
      if echo "$body" | grep -q "checkout_session_id"; then
        CREATED_CHECKOUT_SESSION_ID=$(echo "$body" | grep -oE '"checkout_session_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_CHECKOUT_SESSION_ID" ] && CREATED_CHECKOUT_SESSION_ID=$(echo "$body" | grep -oE '"checkout_session_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
      if echo "$body" | grep -q "transaction_id"; then
        CREATED_TRANSACTION_ID=$(echo "$body" | grep -oE '"transaction_id"\s*:\s*"[^"]*"' | head -1 | grep -oE '"[^"]+"' | tail -1 | tr -d '"')
        [ -z "$CREATED_TRANSACTION_ID" ] && CREATED_TRANSACTION_ID=$(echo "$body" | grep -oE '"transaction_id":"[^"]*"' | head -1 | cut -d'"' -f4)
      fi
    fi
    
    ((PASSED++))
    return 0
  else
    echo -e "${RED}✗${NC} $description (HTTP $http_code)"
    # Show first 150 chars of error
    error_msg=$(echo "$body" | head -c 150 | tr '\n' ' ')
    if [ -n "$error_msg" ]; then
      echo -e "  ${RED}Error:${NC} $error_msg..."
    fi
    echo ""
    FAILED_ENDPOINTS+=("$description - $endpoint (HTTP $http_code)")
    
    # Add to JSON array (escape quotes in error message)
    escaped_body=$(echo "$body" | sed 's/"/\\"/g' | tr '\n' ' ' | sed 's/  */ /g')
    escaped_desc=$(echo "$description" | sed 's/"/\\"/g')
    escaped_endpoint=$(echo "$endpoint" | sed 's/"/\\"/g')
    escaped_service=$(echo "$CURRENT_SERVICE" | sed 's/"/\\"/g')
    
    ERRORS_JSON+=("{\"service\":\"$escaped_service\",\"method\":\"$method\",\"endpoint\":\"$escaped_endpoint\",\"description\":\"$escaped_desc\",\"http_code\":$http_code,\"error_message\":\"$escaped_body\"}")
    
    ((FAILED++))
    
    # In interactive mode, ask if user wants to continue
    if [ "$INTERACTIVE" = "true" ]; then
      echo -e "${YELLOW}⚠ Error detected in $CURRENT_SERVICE${NC}"
      echo -e "${CYAN}Continue testing? (y/n/q to quit):${NC} "
      read -r answer
      case "$answer" in
        [Nn]*|q|Q)
          echo -e "${YELLOW}Stopping tests...${NC}"
          return 2  # Special return code to stop
          ;;
        *)
          echo -e "${GREEN}Continuing...${NC}"
          ;;
      esac
    fi
    return 1
  fi
}

# Test each service incrementally
test_service() {
  local service_name=$1
  shift
  CURRENT_SERVICE="$service_name"
  
  echo -e "${YELLOW}=== Testing $service_name ===${NC}"
  
  local service_failed=0
  for test in "$@"; do
    # Parse test: "METHOD|ENDPOINT|DESCRIPTION" or "METHOD|ENDPOINT|DATA|DESCRIPTION"
    IFS='|' read -r method endpoint data description <<< "$test"
    # If description is empty, data might be in description position
    if [ -z "$description" ] && [ -n "$data" ]; then
      description="$data"
      data=""
    fi
    test_endpoint "$method" "$endpoint" "$data" "$description"
    local result=$?
    
    if [ $result -eq 2 ]; then
      # User chose to quit
      return 2
    elif [ $result -ne 0 ]; then
      ((service_failed++))
    fi
    
    # Small delay between requests
    sleep 0.2
  done
  
  if [ $service_failed -eq 0 ]; then
    echo -e "${GREEN}✓ $service_name: All tests passed${NC}"
  else
    echo -e "${RED}✗ $service_name: $service_failed test(s) failed${NC}"
  fi
  
  echo ""
  sleep $PAUSE_BETWEEN_SERVICES
  return 0
}

# Test services one by one
echo -e "${YELLOW}=== Testing GET Endpoints (Read Operations) ===${NC}"
echo ""

# 1. Accounts
test_service "Accounts" \
  "GET|/accounts|List Accounts" \
  "GET|/accounts/balance|Get Account Balance" \
  "GET|/accounts/balance?currency=XOF|Get Account Balance (XOF)" \
  "GET|/accounts/balance/breakdown|Get Balance Breakdown"
[ $? -eq 2 ] && exit 1

# 2. Organizations
test_service "Organizations" \
  "GET|/organizations|Get Organizations" \
  "GET|/organizations/metrics|Get Organization Metrics"
[ $? -eq 2 ] && exit 1

# 3. Customers
test_service "Customers" \
  "GET|/customers|List Customers" \
  "GET|/customers?page=1&pageSize=10|List Customers (Paginated)"
[ $? -eq 2 ] && exit 1

# 4. Products
test_service "Products" \
  "GET|/products|List Products" \
  "GET|/products?limit=10&offset=0|List Products (Paginated)"
[ $? -eq 2 ] && exit 1

# 5. Transactions
test_service "Transactions" \
  "GET|/transactions|List Transactions" \
  "GET|/transactions?page=1&pageSize=10|List Transactions (Paginated)"
[ $? -eq 2 ] && exit 1

# 6. Payment Links
test_service "Payment Links" \
  "GET|/payment-links|List Payment Links" \
  "GET|/payment-links?limit=10&offset=0|List Payment Links (Paginated)"
[ $? -eq 2 ] && exit 1

# 7. Checkout Sessions
test_service "Checkout Sessions" \
  "GET|/checkout-sessions|List Checkout Sessions" \
  "GET|/checkout-sessions?limit=10&offset=0|List Checkout Sessions (Paginated)"
[ $? -eq 2 ] && exit 1

# 8. Payouts
test_service "Payouts" \
  "GET|/payouts|List Payouts" \
  "GET|/payouts?limit=10&offset=0|List Payouts (Paginated)"
[ $? -eq 2 ] && exit 1

# 9. Beneficiary Payouts
test_service "Beneficiary Payouts" \
  "GET|/beneficiary-payouts|List Beneficiary Payouts" \
  "GET|/beneficiary-payouts?limit=10&offset=0|List Beneficiary Payouts (Paginated)"
[ $? -eq 2 ] && exit 1

# 10. Refunds
test_service "Refunds" \
  "GET|/refunds|List Refunds" \
  "GET|/refunds?limit=10&offset=0|List Refunds (Paginated)"
[ $? -eq 2 ] && exit 1

# 11. Subscriptions
test_service "Subscriptions" \
  "GET|/subscriptions|List Subscriptions" \
  "GET|/subscriptions?page=1&pageSize=10|List Subscriptions (Paginated)"
[ $? -eq 2 ] && exit 1

# 12. Discount Coupons
test_service "Discount Coupons" \
  "GET|/discount-coupons|List Discount Coupons"
[ $? -eq 2 ] && exit 1

# 13. Payment Requests
test_service "Payment Requests" \
  "GET|/payment-requests|List Payment Requests" \
  "GET|/payment-requests?limit=10&offset=0|List Payment Requests (Paginated)"
[ $? -eq 2 ] && exit 1

echo ""
echo -e "${YELLOW}=== Testing POST Endpoints (Create Operations) ===${NC}"
echo ""

# Helper function to get future date (30 days from now)
# Try different date commands for different systems
if date -v+30d +"%Y-%m-%dT%H:%M:%SZ" >/dev/null 2>&1; then
  # macOS
  FUTURE_DATE=$(date -u -v+30d +"%Y-%m-%dT%H:%M:%SZ")
elif date -d "+30 days" +"%Y-%m-%dT%H:%M:%SZ" >/dev/null 2>&1; then
  # Linux
  FUTURE_DATE=$(date -u -d "+30 days" +"%Y-%m-%dT%H:%M:%SZ")
else
  # Fallback: use Python or just current date + 30 days manually
  FUTURE_DATE=$(python3 -c "from datetime import datetime, timedelta; print((datetime.utcnow() + timedelta(days=30)).strftime('%Y-%m-%dT%H:%M:%SZ'))" 2>/dev/null || echo "2025-12-31T23:59:59Z")
fi

# 1. Create Customer
test_service "Customers (Create)" \
  "POST|/customers|{\"name\":\"Test Customer\",\"email\":\"test.customer@example.com\",\"phone_number\":\"+221771234567\",\"country\":\"Senegal\",\"city\":\"Dakar\"}|Create Customer"
[ $? -eq 2 ] && exit 1

# 2. Create Product (One-time)
test_service "Products (Create)" \
  "POST|/products|{\"name\":\"Test Product\",\"description\":\"A test product\",\"product_type\":\"one_time\",\"prices\":[{\"amount\":10000,\"currency_code\":\"XOF\",\"is_default\":true}]}|Create One-Time Product"
[ $? -eq 2 ] && exit 1

# 3. Create Product (Recurring)
test_service "Products (Create Recurring)" \
  "POST|/products|{\"name\":\"Premium Subscription\",\"description\":\"Monthly premium subscription\",\"product_type\":\"recurring\",\"prices\":[{\"amount\":5000,\"currency_code\":\"XOF\",\"billing_interval\":\"month\",\"is_default\":true}]}|Create Recurring Product"
[ $? -eq 2 ] && exit 1

# 4. Create Payment Link (Instant)
test_service "Payment Links (Create Instant)" \
  "POST|/payment-links|{\"link_type\":\"instant\",\"title\":\"Custom Payment\",\"currency_code\":\"XOF\",\"amount\":15000,\"description\":\"Pay any amount\"}|Create Instant Payment Link"
[ $? -eq 2 ] && exit 1

# 5. Create Payment Link (Product) - requires product_id
if [ -n "$CREATED_PRODUCT_ID" ]; then
  test_service "Payment Links (Create Product)" \
    "POST|/payment-links|{\"link_type\":\"product\",\"title\":\"Buy Test Product\",\"currency_code\":\"XOF\",\"product_id\":\"$CREATED_PRODUCT_ID\",\"description\":\"Link to test product\"}|Create Product Payment Link"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Product Payment Link creation (no product_id available)${NC}"
fi

# 6. Create Payment Request
if [ -n "$CREATED_CUSTOMER_ID" ]; then
  test_service "Payment Requests (Create)" \
    "POST|/payment-requests|{\"amount\":20000,\"currency_code\":\"XOF\",\"description\":\"Test payment request\",\"customer_id\":\"$CREATED_CUSTOMER_ID\",\"expiry_date\":\"$FUTURE_DATE\",\"payment_reference\":\"TEST-001\"}|Create Payment Request"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Payment Request creation (no customer_id available)${NC}"
fi

# 7. Create Discount Coupon (use unique code with timestamp)
COUPON_CODE="TEST$(date +%s | tail -c 6)"
test_service "Discount Coupons (Create)" \
  "POST|/discount-coupons|{\"code\":\"$COUPON_CODE\",\"discount_type\":\"percentage\",\"discount_percentage\":20,\"description\":\"20% off test coupon\",\"is_active\":true}|Create Discount Coupon"
[ $? -eq 2 ] && exit 1

# 8. Create Checkout Session
if [ -n "$CREATED_PRODUCT_ID" ] && [ -n "$CREATED_PRICE_ID" ]; then
  test_service "Checkout Sessions (Create)" \
    "POST|/checkout-sessions|{\"amount\":10000,\"currency_code\":\"XOF\",\"title\":\"Test Checkout\",\"product_id\":\"$CREATED_PRODUCT_ID\",\"price_id\":\"$CREATED_PRICE_ID\",\"customer_email\":\"checkout@example.com\"}|Create Checkout Session"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Checkout Session creation (no product_id/price_id available)${NC}"
fi

# 9. Create Checkout Session (Instant - no product)
test_service "Checkout Sessions (Create Instant)" \
  "POST|/checkout-sessions|{\"amount\":25000,\"currency_code\":\"XOF\",\"title\":\"Instant Payment\",\"description\":\"Pay without product\",\"customer_email\":\"instant@example.com\"}|Create Instant Checkout Session"
[ $? -eq 2 ] && exit 1

echo ""
echo ""
echo -e "${YELLOW}=== Testing Operations Requiring Existing Data ===${NC}"
echo ""
echo -e "${CYAN}Note: The following operations require existing database records.${NC}"
echo -e "${CYAN}Run these SQL commands in your database to enable testing:${NC}"
echo ""

# Generate SQL with actual customer_id if available
CUSTOMER_ID_FOR_SQL="${CREATED_CUSTOMER_ID:-'YOUR_CUSTOMER_ID_HERE'}"
ORG_ID="9374638c-1a31-4f79-8451-fc94ed9c4dc9"

echo -e "${YELLOW}1. Create Mock Transaction (for Refund testing)${NC}"
echo -e "${BLUE}Run this SQL:${NC}"
cat <<SQL
INSERT INTO transactions (
  transaction_id,
  organization_id,
  customer_id,
  gross_amount,
  fee_amount,
  net_amount,
  currency_code,
  provider_code,
  payment_method_code,
  transaction_type,
  status,
  description
) VALUES (
  gen_random_uuid(),
  '$ORG_ID',
  '$CUSTOMER_ID_FOR_SQL',
  50000.00,
  500.00,
  49500.00,
  'XOF',
  'SPI',
  'MOBILE_MONEY',
  'payment',
  'completed',
  'Test transaction for refund'
) RETURNING transaction_id;
SQL
echo ""

echo -e "${YELLOW}2. Create Account and Payout Method (for Payout testing)${NC}"
echo -e "${BLUE}Run this SQL:${NC}"
cat <<SQL
-- Create/update account with balance
INSERT INTO accounts (organization_id, balance, currency_code)
VALUES ('$ORG_ID', 100000.00, 'XOF')
ON CONFLICT (organization_id, currency_code) DO UPDATE SET balance = 100000.00;

-- Create payout method
INSERT INTO payout_methods (
  organization_id,
  account_number,
  account_name,
  bank_name,
  payout_method_type,
  is_valid
) VALUES (
  '$ORG_ID',
  '1234567890',
  'Test Account',
  'Test Bank',
  'bank',
  true
) RETURNING payout_method_id;
SQL
echo ""

echo -e "${CYAN}After running the SQL above, set these environment variables and re-run tests:${NC}"
echo -e "  export MOCK_TRANSACTION_ID=\"<transaction_id from step 1>\""
echo -e "  export PAYOUT_METHOD_ID=\"<payout_method_id from step 2>\""
echo ""

# If transaction_id is available (from env or created), test refund creation
MOCK_TRANSACTION_ID="${MOCK_TRANSACTION_ID:-$CREATED_TRANSACTION_ID}"
if [ -n "$MOCK_TRANSACTION_ID" ]; then
  test_service "Refunds (Create)" \
    "POST|/refunds|{\"transaction_id\":\"$MOCK_TRANSACTION_ID\",\"amount\":25000,\"reason\":\"Test refund\"}|Create Refund"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Refund creation (no transaction_id - set MOCK_TRANSACTION_ID env var or see SQL above)${NC}"
fi

# If payout_method_id is available, test payout creation
if [ -n "$PAYOUT_METHOD_ID" ]; then
  test_service "Payouts (Create)" \
    "POST|/payouts|{\"amount\":10000,\"currency_code\":\"XOF\",\"payout_method_id\":\"$PAYOUT_METHOD_ID\"}|Create Payout"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Payout creation (no payout_method_id - set PAYOUT_METHOD_ID env var or see SQL above)${NC}"
fi

# If payout_method_id is available, test beneficiary payout creation
if [ -n "$PAYOUT_METHOD_ID" ]; then
  test_service "Beneficiary Payouts (Create)" \
    "POST|/beneficiary-payouts|{\"amount\":5000,\"currency_code\":\"XOF\",\"payout_method_id\":\"$PAYOUT_METHOD_ID\",\"provider_code\":\"WAVE\",\"payment_method_code\":\"MOBILE_MONEY\"}|Create Beneficiary Payout"
  [ $? -eq 2 ] && exit 1
else
  echo -e "${YELLOW}⚠ Skipping Beneficiary Payout creation (no payout_method_id - set PAYOUT_METHOD_ID env var or see SQL above)${NC}"
fi

echo ""
echo -e "${BLUE}=== Created Resources Summary ===${NC}"
if [ -n "$CREATED_CUSTOMER_ID" ]; then
  echo -e "${GREEN}✓ Customer ID:${NC} $CREATED_CUSTOMER_ID"
fi
if [ -n "$CREATED_PRODUCT_ID" ]; then
  echo -e "${GREEN}✓ Product ID:${NC} $CREATED_PRODUCT_ID"
fi
if [ -n "$CREATED_PRICE_ID" ]; then
  echo -e "${GREEN}✓ Price ID:${NC} $CREATED_PRICE_ID"
fi
if [ -n "$CREATED_PAYMENT_LINK_ID" ]; then
  echo -e "${GREEN}✓ Payment Link ID:${NC} $CREATED_PAYMENT_LINK_ID"
fi
if [ -n "$CREATED_PAYMENT_REQUEST_ID" ]; then
  echo -e "${GREEN}✓ Payment Request ID:${NC} $CREATED_PAYMENT_REQUEST_ID"
fi
if [ -n "$CREATED_COUPON_ID" ]; then
  echo -e "${GREEN}✓ Coupon ID:${NC} $CREATED_COUPON_ID"
fi
if [ -n "$CREATED_CHECKOUT_SESSION_ID" ]; then
  echo -e "${GREEN}✓ Checkout Session ID:${NC} $CREATED_CHECKOUT_SESSION_ID"
fi
echo ""

echo ""
echo -e "${BLUE}=== Test Summary ===${NC}"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

# Write errors to JSON file
if [ ${#ERRORS_JSON[@]} -gt 0 ]; then
  echo "[" > "$OUTPUT_FILE"
  for i in "${!ERRORS_JSON[@]}"; do
    echo -n "  ${ERRORS_JSON[$i]}" >> "$OUTPUT_FILE"
    if [ $i -lt $((${#ERRORS_JSON[@]} - 1)) ]; then
      echo "," >> "$OUTPUT_FILE"
    else
      echo "" >> "$OUTPUT_FILE"
    fi
  done
  echo "]" >> "$OUTPUT_FILE"
  echo -e "${CYAN}Errors saved to: $OUTPUT_FILE${NC}"
else
  echo "[]" > "$OUTPUT_FILE"
  echo -e "${CYAN}No errors found. Empty array saved to: $OUTPUT_FILE${NC}"
fi

if [ $FAILED -gt 0 ]; then
  echo ""
  echo -e "${RED}Failed Endpoints:${NC}"
  for endpoint in "${FAILED_ENDPOINTS[@]}"; do
    echo -e "  ${RED}✗${NC} $endpoint"
  done
  echo ""
  echo -e "${YELLOW}Next Steps:${NC}"
  echo -e "  1. Review failed endpoints above"
  echo -e "  2. Check JSON file: ${CYAN}$OUTPUT_FILE${NC}"
  echo -e "  3. Test manually using: ${CYAN}API_ENDPOINTS_TESTING_GUIDE.md${NC}"
  echo -e "  4. Fix issues one by one"
  echo -e "  5. Re-run this script to verify fixes"
  echo ""
  exit 1
else
  echo -e "${GREEN}✓ All endpoints passed!${NC}"
  echo -e "${CYAN}You can now test POST/PATCH/DELETE endpoints manually${NC}"
  exit 0
fi
