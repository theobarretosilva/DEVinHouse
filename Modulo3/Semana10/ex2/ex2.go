package main

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
	pessoa := []Person{
		{Name: "Théo", Age: 17, Address: },
		{},
		{},
	}
}
