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
    
function verificaValorSaque(){
    let valor = parseFloat(document.getElementById('valor').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let saldoCliente = contaClienteDeAcordoId.saldo;
    let saldoFinal = saldoCliente - valor;

    if(valor <= 0){
        alert("O valor digitado para saque é inválido");
        return;
    }else if(valor > saldoCliente){
        alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoCliente);
    }else if(valor > 0 || valor < saldoCliente){
        contasClientes[idCliente - 1].saldo = saldoCliente - valor;
        alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoFinal);
    }
}

function verificaValorDeposito(){
    let valor = parseFloat(document.getElementById('valor').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let saldoCliente = contaClienteDeAcordoId.saldo;
    let saldoFinal = saldoCliente - valor;

    if(valor <= 0){
        alert("O valor digitado para depósito é inválido");
        return;
    }else if(valor > 0){
        let valorFinal = saldoCliente + valor;
        contasClientes[idCliente - 1].saldo = valorFinal;
        alert("O depósito foi realizado com sucesso! Seu saldo atual é: R$ " + saldoFinal)
    }
}

function sacarOuDepositar(){
    const saqueOuDeposito = document.getElementById('saqueDeposito').value;

    if(saqueOuDeposito == "Sacar"){
        verificaValorSaque();
    }else if(saqueOuDeposito == "Depositar"){
        verificaValorDeposito();
    }
};

function fazerOperacoes(){
    let senha = parseInt(document.getElementById('senha').value);

    let idCliente = parseInt(document.getElementById('contasClientes').value);
    let contaClienteDeAcordoId = contasClientes.find(function (contaCliente) {
        return contaCliente.id === idCliente;
    });
    let senhaCliente = contaClienteDeAcordoId.senha;
    
    if(senha == senhaCliente){
        sacarOuDepositar();
    }else{
        alert("Senha inválida!")
    }
}

function verificarCampos(){
    let valor = parseFloat(document.getElementById('valor').value);
    const saqueOuDeposito = document.getElementById('saqueDeposito').value;
    let senha = parseInt(document.getElementById('senha').value);

    if(!valor){
        alert("Valor inválido! Digite um valor válido para continuar!")
    }else if(saqueOuDeposito == "escolha"){
        alert("Escolha entre saque ou depósito para continuar!");
    }else if(!senha){
        alert("Senha inválida! Digite uma senha válida para continuar!");
    }else{
        fazerOperacoes();
    }
}