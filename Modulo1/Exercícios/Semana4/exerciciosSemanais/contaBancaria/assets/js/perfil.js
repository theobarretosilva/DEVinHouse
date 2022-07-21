var contasClientes = [
    {id: 1, nome: 'Raquel Barreto', saldo: 5000},
    {id: 2, nome: 'Iran Silva', saldo: 10000},
    {id: 3, nome: 'Guilherme Barreto Silva', saldo: 3000},
    {id: 4, nome: 'Théo Barreto Silva', saldo: 500000}
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
    contasClientes.forEach((list) => {
        select.appendChild(criarOption(list.id, list.nome));
    });
};

function saque(valor, idConta){
    var valor = document.querySelector('#valor').value;

    var selectSaque = document.getElementById("saqueDeposito");
    var opcaoSaque = selectSaque.options[selectSaque.selectedIndex].value;

    var contaSelecionada = document.querySelector('#saqueDeposito');
    var idSelecionado = contaSelecionada.options[contaSelecionada.selectedIndex].value;

    var saldoContaDeAcordoId = contasClientes.[idSelecionado, nom]
    //EU ESTAVA PEGANDO O SALDO DO CLIENTE DE ACORDO COM O ID SELECIONADO NO SELECT//
    
    /*if(opcaoSaque === "Sacar"){
        if(valor <= 0 ){
            alert("O valor digitado para saque é inválido");
        }else if(valor > saldoConta){
            alert("Saldo insuficiente! " + "Seu saldo atual é: R$ " + saldoConta)
        }else if(valor > 0 || valor < saldoConta){
            alert("O saque foi feito com sucesso! Seu saldo atual é: R$ " + saldoConta);
            //atualizar array com o saldo atual da conta//
        }
    }*/
};

/*var selectSaque = document.getElementById('saqueDeposito');
var opcaoSaque = selectSaque.options[selectSaque.selectedIndex].text;
console.log(opcaoSaque);*/