package controller

import (
	"strconv"
	"todo-grpc/app/db"
	"todo-grpc/app/models"

	"github.com/gin-gonic/gin"
)

type TodoController struct{}

func (todoCtrl *TodoController) Create(c *gin.Context) {
	var todo models.TodoHTTP
	var reqBody models.TodoRequestBodyHTTP
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	todo.Title = reqBody.Title
	todo.Description = reqBody.Description
	todo.Completed = false // default is false

	if err := db.GlobalConnectionDB.Create(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "Successfully created todo.",
		"todo":    todo,
	})
}

func (todoCtrl *TodoController) GetAll(c *gin.Context) {
	var todos []models.TodoHTTP
	var reqQuery models.TodoRequestGetAll

	if err := c.ShouldBindQuery(&reqQuery); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	reqLimit, err := strconv.Atoi(reqQuery.Limit)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	_, err = strconv.ParseBool(reqQuery.NotCompleted)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err := db.GlobalConnectionDB.
		Where("completed = ?", reqQuery.NotCompleted).
		Limit(reqLimit).
		Find(&todos).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "Successfully retrieved todos.",
		"todos":   todos,
	})
}

func (todoCtrl *TodoController) GetByID(c *gin.Context) {
	var todo models.TodoHTTP
	if err := db.GlobalConnectionDB.Where("id = ?", c.Param("id")).First(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "Successfully retrieved todo.",
		"todo":    todo,
	})
}

func (todoCtrl *TodoController) Update(c *gin.Context) {
	var todo models.TodoHTTP
	var reqBody models.TodoRequestBodyHTTP
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err := db.GlobalConnectionDB.Where("id = ?", c.Param("id")).First(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if reqBody.Title != "" {
		todo.Title = reqBody.Title
	}

	if reqBody.Description != "" {
		todo.Description = reqBody.Description
	}

	if err := db.GlobalConnectionDB.Where("id = ?", c.Param("id")).Save(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "Successfully updated todo.",
		"todo":    todo,
	})
}

func (todoCtrl *TodoController) Delete(c *gin.Context) {
	var todo models.TodoHTTP
	var response models.TodoHTTP
	if err := db.GlobalConnectionDB.Where("id = ?", c.Param("id")).First(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if err := db.GlobalConnectionDB.Where("id = ?", c.Param("id")).Delete(&todo).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"message": "Successfully deleted todo.",
		"todo":    response,
	})
}
