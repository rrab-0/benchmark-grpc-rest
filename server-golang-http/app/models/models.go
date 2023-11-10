package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type TodoHTTP struct {
	ID        uuid.UUID      `json:"id" uri:"id" gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`

	Title       string `json:"title"`
	Description string `json:"description"`
	Completed   bool   `json:"completed"`
}

type TodoRequestBodyHTTP struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

type TodoRequestGetAll struct {
	Limit        string `form:"limit"`
	NotCompleted string `form:"not-completed"`
}
