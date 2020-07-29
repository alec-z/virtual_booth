package main

import (
	"github.com/alec-z/vb_backend/dbm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"time"
)

func main() {
	time.Sleep(time.Duration(60)*time.Second);
	dbm.Init()
	RouterInit()
}
