package main

import (
	"os"
	"todo-grpc/app/db"
	"todo-grpc/app/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		panic("ERROR: Could not load .env")
	}

	db.ConnectDB()
	gin.ForceConsoleColor()
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()
	router.SetupRoutes(r)

	r.Run(":" + os.Getenv("DEV_HTTP_SERVER_PORT"))
}
