package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)
type Visitor struct {
	gorm.Model
	Phone string `gorm:"unique_index:input_index;not null;size:40" json:"phone" xml:"phone" form:"phone" query:"phone"`
	Content string `gorm:"type:text"`
}