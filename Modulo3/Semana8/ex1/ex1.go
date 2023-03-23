package main

import (
	"fmt"
)

func main() {
	fmt.Print("Olá, escreva o 1° inteiro:");
	var inteiro1 int;
	fmt.Scanln(&inteiro1);

	fmt.Print("Agora escreva o 2° inteiro:");
	var inteiro2 int;
	fmt.Scanln(&inteiro2)

	resultado:= inteiro1 + inteiro2;
	fmt.Printf("O inteiro1 mais o inteiro2 é igual a: %d", resultado)

	resultado2:= inteiro1 - inteiro2;
	fmt.Printf("A diferença entre o inteiro 1 e inteiro 2 é: %d", resultado2)
}
