package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Visit struct {
	gorm.Model
	Project string
	VisitorID uint
	Visitor Visitor

}