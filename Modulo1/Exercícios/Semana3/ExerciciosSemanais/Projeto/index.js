var convidado1 = {nome: "Clarissa", sobrenome: "Gonçalves", setor: "Camarote", idade: 18};
var convidado2 = {nome: "Eduarda", sobrenome: "Franderlinde", setor: "Camarote", idade: 17};

var convidado3 = {nome: "Raquel", sobrenome: "Barreto", setor: "Pista", idade: 32};
var convidado4 = {nome: "Iran", sobrenome: "Silva", setor: "Pista", idade: 35};

var convidado5 = {nome: "Giovanna", sobrenome: "Grigio", setor: "Arquibancada", idade: 18};
var convidado6 = {nome: "Ricardo", sobrenome: "Spíndola", setor: "Arquibancada", idade: 17};

var listaDeConvidados = [convidado1, convidado2, convidado3, convidado4, convidado5, convidado6];


function liberarBebidas(lista){
    var resultado = lista.map((convidado) => {
        convidado.openBar = false;
        
        if(convidado.idade >= 18){
            convidado.openBar = true;
        }
        return convidado;
    });
    return resultado;
}
var listaDeConvidadosFinal = liberarBebidas(listaDeConvidados);

var separarCamarote = (lista) => {
    var listaCamarote = lista.filter((convidado) => {
        if(convidado.setor == "camarote"){
            return true;
        } else {
            return false;
        }
    });
    return listaCamarote;
};

var separarPista = (lista) => {
    return lista.filter((convidado) => {
        return convidado.setor == "pista" ? true : false;
    });
};

var separarArquibancada = (lista) => {
    return lista.filter((convidado) => convidado.setor == "arquibancada");
};

var filtrarPorSetor = (lista, setor) => {
    return lista.filter((conv) => conv.setor === setor);
};

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

const listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);
const listaCamarote = separarCamarote(convidadosComBebidasProcessada);
const listaPista = separarPista(convidadosComBebidasProcessada);

const ulArquibancadaEl = document.getElementById("listaArquibancada");
const ulPistaEl = document.getElementById("listaPista");
const ulCamaroteEl = document.getElementById("listaCamarote");

const montaNome = (objPessoa) => {
    return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};

listaArquibancada.forEach((convidado) => {
    ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

listaCamarote.forEach((convidado) => {
    ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

listaPista.forEach((convidado) => {
    ulPistaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

const marcarOpenBar = (convidado) => {
    return convidado.openBar ? "🍹" : "";
  };