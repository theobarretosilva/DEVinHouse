package main

import (
    "fmt"
)

func concatenarStrings(str1, str2 string) string {
    return str1 + str2;
};

func main() {
	fmt.Print("Qual a primeira palavra que você deseja concatenar? \n");
	var palavra1 string;
	fmt.Scanln(&palavra1);

	fmt.Print("Qual a segunda palavra que você deseja concatenar? \n");
	var palavra2 string;
	fmt.Scanln(&palavra2);

    resultado := palavra1 + " " + palavra2;
    fmt.Println("A concatenação ficou dessa maneira: ", resultado);
}
