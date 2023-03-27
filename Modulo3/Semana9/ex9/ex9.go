package main

import (
	"fmt"
)

func parOuImpar(num int) string {
	if num%2 == 0 {
		return "par";
	} else {
		return "ímpar";
	};
};

func main() {
	num := 7;
	resultado := parOuImpar(num);
	fmt.Printf("%d é %s\n", num, resultado);
};
