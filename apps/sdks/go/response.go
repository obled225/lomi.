// Package lomi provides types for the Lomi API
// AUTO-GENERATED - Do not edit manually
package lomi

import "fmt"

// Error represents an API error
type Error struct {
	StatusCode int
	Message    string
	Body       map[string]interface{}
}

func (e *Error) Error() string {
	return fmt.Sprintf("lomi API error (status %d): %s", e.StatusCode, e.Message)
}
