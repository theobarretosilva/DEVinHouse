function diferencaAnos(){
    var diferenca;

    var anoDigitado = prompt("Digite um ano");
    var anoAtual = new Date().getFullYear();

    var diferencaAnos = anoAtual - anoDigitado;

    alert("A diferença de anos entre: " + anoAtual + " e " + anoDigitado + " é " + diferencaAnos);
}