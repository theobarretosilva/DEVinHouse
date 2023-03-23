package main

import "fmt"

func main() {
	fmt.Print("Digite um número inteiro: ")
	var numero int
	fmt.Scanln(&numero)

	fatorial := 1
	for i := 1; i <= numero; i++ {
		fatorial *= i
	}

	fmt.Printf("O fatorial de %d é %d", numero, fatorial)
}