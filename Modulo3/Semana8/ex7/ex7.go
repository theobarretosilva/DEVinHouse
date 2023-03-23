package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Digite uma string: ")
	var input string
	fmt.Scanln(&input)

	input = strings.ToLower(input)
	input = strings.ReplaceAll(input, " ", "")

	ehPalindromo := true
	for i := 0; i < len(input)/2; i++ {
		if input[i] != input[len(input)-i-1] {
			ehPalindromo = false
			break
		}
	}

	if ehPalindromo {
		fmt.Println("A string é um palíndromo!")
	} else {
		fmt.Println("A string não é um palíndromo!")
	}
}