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

class Pedido{
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numero, cliente){
        this.numeroPedido = numero;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = cliente;

    }

    adicionarProduto(Produto){
        listaProdutos.push(Produto);
    }

    calcularTotal(){
        
    }
}

const novoPedido = new Pedido;
novoPedido.numeroPedido = prompt("Qual o número do pedido?");
novoPedido.dataPedido = new Date().toLocaleDateString();
novoPedido.estaPago = false;
novoPedido.listaProdutos = [];
novoPedido.nomeCliente = prompt("Qual o nome do cliente?");