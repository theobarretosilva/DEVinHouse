package main

import "fmt"

type Book struct {
	Title string;
	Author string;
	publishedYear int;
	pages int;
}

func main() {
	livro := []Book {
		{Title: "A Culpa é das Estrelas", Author: "John Green", publishedYear: 2012, pages: 263},
		{Title: "As Cores da Escravidão", Author: "Ieda de Oliveira", publishedYear: 2013, pages: 98},
		{Title: "A Maldição do Titã", Author: "Rick Riordan", publishedYear: 2007, pages: 286},
	};

	fmt.Println(livro)
}