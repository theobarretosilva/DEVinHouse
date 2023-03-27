package main

import (
    "fmt"
)

func maiorValor(array []int) int {
    maior := array[0];
    for _, num := range array {
        if num > maior {
            maior = num
        };
    };
    return maior;
};

func main() {
	fmt.Print("Me dê os números que lhe darei o maior dentre eles!");
    var array []int;
	fmt.Scanln(&array);

    maior := maiorValor(array);
    fmt.Println("O maior valor no array é:", maior);
};
