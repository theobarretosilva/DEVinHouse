var contasClientes = [
    {id: 1, nome: 'Raquel Barreto', saldo: 5000},
    {id: 2, nome: 'Iran Silva', saldo: 10000},
    {id: 3, nome: 'Guilherme Barreto Silva', saldo: 3000},
];
    
function pegarNome(clientes) {
    return [clientes.nome];
}

var nomeClientes = contasClientes.map(pegarNome);
var selectContas = document.getElementById('contas_clientes');

var criarOption = (valor, texto) => {
    var option = document.createElement('option');
    option.value = valor;
    option.innerText = texto;

    return option;
};

var colocarNoSelect = (list) => {
    var select = document.querySelector('#contasClientes');
    list.forEach((list) => {
        select.appendChild(criarOption(list.id, list.nome));
    });
};

function adicionarContas(){
    nomeClientes.forEach(function(item){
        $('select').append('<option>' + contasClientes + '</option>');
    });
}

/*function saque(valor, idConta){
    var selectSaque = document.getElementById("saqueDeposito");
    var opcaoSaque = selectSaque.options[selectSaque.selectedIndex].value;
    /*if(//Select 'Sacar' for selecionado// === "Sacar"){

    }
    if(valor <= 0 ){
        alert("O valor digitado para saque é inválido");
    }else if(valor > saldoConta){
        alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoConta)
    }else if(valor > 0 || valor < saldoConta){
        alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoConta);
        //atualizar array com o saldo atual da conta//
    }
}*/

var selectSaque = document.querySelector("#saqueDeposito");
var opcaoSaque = selectSaque.options[select.selectedIndex].text;
console.log(opcaoSaque);