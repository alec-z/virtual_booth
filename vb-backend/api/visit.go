package api

import (
	"fmt"
	"github.com/alec-z/vb_backend/dbm"
	"github.com/alec-z/vb_backend/model"
	"github.com/labstack/echo/v4"
	"io/ioutil"
	"net/http"
)

func CreateVisit(c echo.Context) (err error) {
	phone := c.QueryParam("phone")
	project := c.QueryParam("project")
	db := dbm.GetDbManager()
	defer db.Close()
	var visitor model.Visitor
	var visit model.Visit
	url := "http://www.bagevent.com/api/v1/third/6561351/attendee_info_by_cellphone?cellphone=" + phone + "&access_token=c5224e6a7a18d43e2cb7290b83a6a4dds&access_secret=1e98399c5ca4ss"
	db.Where("phone = ?", phone).First(&visitor)
	if visitor.ID == 0 {
		// insert
		resp, err := http.Get(url)
		if err != nil {
			// handle error
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		fmt.Print(string(body))
		visitor.Content = string(body)
		visitor.Phone = phone
		db.Create(&visitor)
	}
	db.Where(model.Visit{VisitorID: visitor.ID, Project: project}).FirstOrCreate(&visit)
	return c.JSON(http.StatusOK, visit)
}

