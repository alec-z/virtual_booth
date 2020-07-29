package dbm

import (
	"fmt"
	"github.com/alec-z/vb_backend/config"
	"github.com/alec-z/vb_backend/model"
	"github.com/jinzhu/gorm"
)

func Init() {
	db := GetDbManager()
	db.AutoMigrate(&model.Visit{})
	db.AutoMigrate(&model.Visitor{})
}

func GetDbManager() *gorm.DB {
	configuration := config.GetConfiguration()
	connectString := fmt.Sprintf("%s:%s@(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", configuration.DB_USERNAME,
		configuration.DB_PASSWORD,configuration.DB_HOST,configuration.DB_PORT, configuration.DB_NAME)
	db, err := gorm.Open("mysql", connectString)
	if err != nil {
		fmt.Println(err)
		panic("DB connection Error!")
	}
	return db
}
