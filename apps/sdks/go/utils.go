// Package lomi provides types for the Lomi API
// AUTO-GENERATED - Do not edit manually
package lomi

import (
	"net/url"
)

// paramsToQuery converts a map of parameters to url.Values
func paramsToQuery(params map[string]string) url.Values {
	query := url.Values{}
	for k, v := range params {
		query.Add(k, v)
	}
	return query
}
