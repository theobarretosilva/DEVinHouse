//-------------------------------------------EXERCICIO 3-----------------------------------------------------//
const contasClientes = [
    {id: 1, nome: 'Raquel Barreto', saldo: 900000, senha: 1234},
    {id: 2, nome: 'Iran Silva', saldo: 10000, senha: 12345},
    {id: 3, nome: 'Guilherme Barreto Silva', saldo: 3000, senha: 123456},
    {id: 4, nome: 'Théo Barreto Silva', saldo: 500000, senha: 1234567}
];

function pegarNome(clientes) {
    return [clientes.nome];
}

let nomeClientes = contasClientes.map(pegarNome);
let selectContas = document.getElementById('contas_clientes');

let criarOption = (valor, texto) => {
    let option = document.createElement('option');
    option.value = valor;
    option.innerText = texto;

    return option;
};

let colocarNoSelect = (list) => {
    let select = document.querySelector('#contasClientes');
    contasClientes.forEach((list) => {
        select.appendChild(criarOption(list.id, list.nome));
    });
};

window.onload = colocarNoSelect;
    
//-------------------------------------------EXERCICIO 4-----------------------------------------------------//
function verificaValorSaque(){
    let valor = parseFloat(document.getElementById('valor').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let saldoCliente = contaClienteDeAcordoId.saldo;
    let saldoFinal = saldoCliente - valor;
    let contasAtualizadas = [...contasClientes, contaAtualizada];
    console.log(contasAtualizadas);
    let saldoAtual = contasAtualizadas[idCliente - 1].saldo;

    if(valor <= 0){
        alert("O valor digitado para saque é inválido");
        return;
    }else if(valor > saldoCliente){
        alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoCliente);
    }else if(valor > 0 || valor < saldoCliente){
        saldoAtual = saldoFinal;
        alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoAtual);
    }
}

//-------------------------------------------EXERCICIO 5-----------------------------------------------------//
function verificaValorDeposito(){
    let valor = parseFloat(document.getElementById('valor').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let saldoCliente = contaClienteDeAcordoId.saldo;

    if(valor <= 0){
        alert("O valor digitado para depósito é inválido");
        return;
    }else if(valor > 0){
        //atualizar array com o saldo atual da conta após depósito//
        alert("O depósito foi realizado com sucesso! Seu saldo atual é: R$ " + saldoCliente)
    }
}

//-------------------------------------------EXERCICIO 6-----------------------------------------------------//
function sacarOuDepositar(){
    const saqueOuDeposito = document.getElementById('saqueDeposito');

    if(saqueOuDeposito === "Sacar"){
        verificaValorSaque();
    }else if(saqueOuDeposito === "Depositar"){
        verificaValorDeposito();
    }
};

//-------------------------------------------EXERCICIO 7-----------------------------------------------------//
function fazerOperacoes(){
    let senha = parseInt(document.getElementById('senha').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let senhaCliente = contaClienteDeAcordoId.senha;
    
    if(senhaCliente != senha){
        alert("Senha inválida!")
    }else{
        sacarOuDepositar();
    }
}