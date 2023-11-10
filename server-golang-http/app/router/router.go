package router

import (
	"todo-grpc/app/controller"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	// r.Use(cors.New(cors.DefaultConfig()))
	r.Use(cors.Default())

	todo := r.Group("/todo")
	{
		todoCtrl := &controller.TodoController{}
		todo.POST("/string-message/new", todoCtrl.CreateStringMessage)
		todo.POST("/new", todoCtrl.Create)
		todo.GET("", todoCtrl.GetAll)
		todo.GET("/:id", todoCtrl.GetByID)
		todo.PUT("/:id", todoCtrl.Update)
		todo.DELETE("/:id", todoCtrl.Delete)
	}
}
