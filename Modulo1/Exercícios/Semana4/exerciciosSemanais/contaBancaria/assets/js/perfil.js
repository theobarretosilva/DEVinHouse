//-------------------------------------------EXERCICIO 3-----------------------------------------------------//
let contasClientes = [
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

function iniciarVariaveis1(){
    const saqueOuDeposito = document.getElementById('saqueDeposito').value;
    const idContaSelect = document.getElementById('contasClientes').value;
    const valor = document.getElementById('valor').value;
    /*let saldoDeAcordoId = contasClientes.forEach((id) => {
        idContaSelect.saldo;
    });*/

}
    
//-------------------------------------------EXERCICIO 4-----------------------------------------------------//
function verificaValorSaque(){

    const valor = document.getElementById('valor').value;

    if(valor <= 0){
        alert("O valor digitado para saque é inválido");
    }/*else if(valor > saldoContaDeAcordoId){
        alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoContaDeAcordoId);
    }else if(valor > 0 || valor < saldoContaDeAcordoId){
        //atualizar array com o saldo atual da conta após saque//
        alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoContaDeAcordoId);
    }*/
}

//-------------------------------------------EXERCICIO 5-----------------------------------------------------//
function verificaValorDeposito(){
    const valor = document.getElementById('valor').value;

    if(valor <= 0){
        alert("O valor digitado para depósito é inválido");
    }else if(valor > 0){
        //atualizar array com o saldo atual da conta após depósito//
        alert("O depósito foi realizado com sucesso! Seu saldo atual é: R$ " + saldoContaDeAcordoId)
    }
}

//-------------------------------------------EXERCICIO 6-----------------------------------------------------//
function sacarOuDepositar(){
    const saqueOuDeposito = document.getElementById('saqueDeposito');

    iniciarVariaveis1();

    if(saqueOuDeposito === "Sacar"){
        verificaValorSaque();
    }else if(saqueOuDeposito === "Depositar"){
        verificaValorDeposito();
    }
};

function preenchimentoDeDados(){
    
}

const botao = document.getElementById('fazerOperacao');


/*const validaValor = (valor)=> {
    if(isNaN(valor) || valor <= 0){
        console.log('Caiu!')
        alert('Valor inválido!');
        return false;
    }
    return true;
}

const atualizaSaldo = (contaAtual, saldo)=> {

}

const sacar = (contaAtual, valor)=> {
    if(!validaValor(valor)){
        return;
    }

    if(valor > contaAtual.saldo){
        alert(`Saldo insuficiente. Saldo atual: ${contaAtual.saldo}`);
        return;
    }

    const novoSaldo = contaAtual.saldo - valor;

    const contaSemContaAtual = contasClientes.filter((c)=> c.id !== contaAtual.id);
    const contasAtualizadas = [...contaSemContaAtual, {...contaAtual, saldo: novoSaldo}];

    contasClientes = contasAtualizadas;

    alert('Saque efetuado com sucesso! Saldo atual: R$ ' + novoSaldo);
};

const operacoes = (event)=> {
    event.preventDefault();

    sacar();
}

const depositar = (contaAtual, valor)=> {
    if(isNaN(valor) || valor <= 0){
        console.log('Caiu!')
        alert('Valor inválido!');
        return;
    }

    if(valor > contaAtual.saldo){
        alert(`Saldo insuficiente. Saldo atual: ${contaAtual.saldo}`);
        return;
    }

    const novoSaldo = contaAtual.saldo - valor;

    const contaSemContaAtual = contasClientes.filter((c)=> c.id !== contaAtual.id);
    contasAtualizadas = [...contaSemContaAtual, {...contaAtual, saldo: novoSaldo}];

    contasClientes = contasAtualizadas;

    alert('Saque efetuado com sucesso! Saldo atual: R$ ' + novoSaldo);
};*/

/*
let selectSaque = document.getElementById("saqueDeposito");
let contaSelecionada = document.querySelector('#contasClientes');
//let idSelecionado = contaSelecionada.options[contaSelecionada.selectedIndex].value;

console.log(saldoDeAcordoId);

function sacar(valor, idConta){

    let opcaoSaque = selectSaque.options[selectSaque.selectedIndex].value;
    
    if(opcaoSaque === "Sacar"){
        if(valor <= 0){
            alert("O valor digitado para saque é inválido");
        }else if(valor > saldoContaDeAcordoId){
            alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoContaDeAcordoId);
        }else if(valor > 0 || valor < saldoConta){
            //atualizar array com o saldo atual da conta após saque//
            alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoContaDeAcordoId);
        }
    }
};

function depositar(valor, idConta){

    let opcaoDeposito = selectSaque.options[selectSaque.selectedIndex].value;

    if(opcaoDeposito === "Depositar"){
        if(valor <= 0){
            alert("O valor digitado para depósito é inválido");
        }else if(valor > 0){
            //atualizar array com o saldo atual da conta após depósito//
            alert("O depósito foi feito com sucesso! Seu saldo atual é: R$ " + saldoContaDeAcordoId)
        }
    }
}

function depositoOuSaque(){
    sacar();
    depositar();
}*/