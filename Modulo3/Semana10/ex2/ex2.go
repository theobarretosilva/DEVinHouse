package main

import "fmt"

type Address struct {
	Street  string
	City    string
	State   string
	zipCode string
}

type Person struct {
	Name    string
	Age     int
	Address Address
}

func main() {
	endereco := Address{
		Street:  "Rua tal",
		City:    "São Pedro",
		State:   "SC",
		zipCode: "88105-895",
	}

	pessoa := []Person{
		{Name: "Théo", Age: 17, Address: endereco},
		{Name: "Julia", Age: 80, Address: endereco},
		{Name: "Pablo", Age: 19, Address: endereco},
	}

	fmt.Println(pessoa)
}
