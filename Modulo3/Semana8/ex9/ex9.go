package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Digite uma frase: ")
	var input string
	fmt.Scanln(&input)

	palavras := strings.Fields(input)
	qtdPalavras := make(map[string]int)

	for _, palavra := range palavras {
		palavra = strings.ToLower(palavra)
		qtdPalavras[palavra]++
	}

	fmt.Println("Palavras repetidas:")
	for palavra, count := range qtdPalavras {
		if count > 1 {
			fmt.Printf("%s: %d\n", palavra, count)
		}
	}
}