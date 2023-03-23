package main

import (
	"fmt"
	"strings"
)

func main() {
	var sentenca string
	fmt.Print("Me dê uma frase que eu lhe devolveirei ela capitalizada: ")
	fmt.Scanln(&sentenca)

	fraseCapitalizada := strings.Title(strings.ToLower(sentenca))
	fmt.Printf("A frase capitalizada é: %s", fraseCapitalizada)
}