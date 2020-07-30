package main

import (
	"github.com/alec-z/vb_backend/api"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func RouterInit() {
	// New Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/api/visits", api.CreateVisit)
	// Start server
	e.Logger.Info(e.Start(":3000"))
}
