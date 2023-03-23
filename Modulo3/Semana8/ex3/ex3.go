package main

import(
	"fmt"
)

func ehPrimo(numero int) bool {
	for j := 2; j < numero; j++ {
		if numero % j == 0 {
			return false;
		}
	}
	return true;
}

func main() {
	fmt.Print("Até qual número você deseja verificar? \n")
	var numero int;
	fmt.Scan(&numero);

	for i := 2; i < numero; i++ {
		if ehPrimo(i) {
			fmt.Printf("%d é primo \n", i)
		}
	}
}