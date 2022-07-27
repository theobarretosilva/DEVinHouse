import { saudacao } from "./saudacao.js";
import { saudacaoEsp as saudacaoEspecial } from "./saudacao-especial.js";

console.log(saudacaoEspecial("Théo"))
window.onload(console.log(saudacao));

class Produto{
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}