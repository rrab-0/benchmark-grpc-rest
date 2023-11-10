package db

import (
	"fmt"
	"log"
	"os"

	"todo-grpc/app/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var GlobalConnectionDB *gorm.DB

func ConnectDB() {
	var (
		DB_HOST     = os.Getenv("DB_HOST")
		DB_USER     = os.Getenv("DB_USER")
		DB_PASSWORD = os.Getenv("DB_PASSWORD")
		DB_NAME     = os.Getenv("DB_NAME")
		DB_PORT     = os.Getenv("DB_PORT")
	)

	connectionString := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai",
		DB_HOST,
		DB_USER,
		DB_PASSWORD,
		DB_NAME,
		DB_PORT,
	)

	db, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	GlobalConnectionDB = db // make gorm PostgreSQL connection global
	if err != nil {
		panic(err)
	}

	log.Println("SUCCESS: Connected to PostgreSQL database.")

	err = GlobalConnectionDB.AutoMigrate(
		&models.TodoHTTP{},
	)

	if err != nil {
		log.Fatalf("ERROR: Failed to perform database migration: %s\n", err)
	}
}
