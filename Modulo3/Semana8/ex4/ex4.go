package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Me dê um texto que lhe darei a quantidade de palavras:")
	var text string;
	fmt.Scanln(&text)

	words := strings.Fields(text)
	fmt.Printf("Quantidade de palavras na sentença: %d", len(words))
}