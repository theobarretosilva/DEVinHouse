package main

import (
	"fmt"
)

func main() {
	fmt.Print("Digite uma String e eu lhe darei o tamanho dela:")
	var text string;
	fmt.Scanln(&text)

	fmt.Println(len(text))
}