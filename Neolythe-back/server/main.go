package main

import (
	"awesomeProject/proto"
	"context"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"net"
	"reflect"
)
var myDb *gorm.DB
type server struct {

}

type Result struct {
	gorm.Model
	Result int64 `json:"result" db:"result"`
}

func main ()  {
	listener, err := net.Listen("tcp", ":4040")
	if err != nil {
		panic(err)
	}
	srv := grpc.NewServer()
	proto.RegisterAddServiceServer(srv, &server{})
	reflection.Register(srv)



	dsn := "user=postgres password=mysecretpassword dbname=postgres port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	fmt.Println("Successfully connected!")
	fmt.Println(reflect.TypeOf(db))
	myDb = db
	myDb.AutoMigrate(&Result{})
	if e := srv.Serve(listener); e != nil {
		panic(e)
	}
}
func (s *server) Add(ctx context.Context, request *proto.Request) (*proto.Response, error) {
	a, b := request.GetA(), request.GetB()
	result := a + b

	var res = &Result{gorm.Model{}, result}
	if myDb.Create(res).Error != nil {
		fmt.Println("Error on create result")
	}
	return &proto.Response{Result: result}, nil
}

func (s *server) Multiply(ctx context.Context, request *proto.Request) (*proto.Response, error){
	a, b := request.GetA(), request.GetB()
	result := a * b

	return &proto.Response{Result: result}, nil
}



