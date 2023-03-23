package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Print("Digite a base: ")
	var base float64;
	fmt.Scanln(&base)

	fmt.Print("Digite o expoente: ")
	var expoente float64;
	fmt.Scanln(&expoente)

	resultado := math.Pow(base, expoente)
	fmt.Printf("%.2f elevado a %.2f é igual a %.2f", base, expoente, resultado)
}