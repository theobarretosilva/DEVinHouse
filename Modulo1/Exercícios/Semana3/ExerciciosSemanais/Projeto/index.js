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
        
        if(listaDeConvidados.idade = 18){
            convidado.openBar = false;
        }
        return convidado;
    });
    return resultado;
}
var listaDeConvidadosFinal = liberarBebidas(listaDeConvidados);
console.log(listaDeConvidadosFinal);