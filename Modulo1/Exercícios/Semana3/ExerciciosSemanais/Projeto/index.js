var convidados = [
    {nome: "Clarissa", sobrenome: "Gonçalves", setor: "Camarote", idade: 18},
    {nome: "Eduarda", sobrenome: "Franderlinde", setor: "Camarote", idade: 17},
    {nome: "Mariah", sobrenome: "Matos", setor: "Camarote", idade: 17},
    {nome: "Raquel", sobrenome: "Barreto", setor: "Pista", idade: 32},
    {nome: "Iran", sobrenome: "Silva", setor: "Pista", idade: 35},
    {nome: "Guilherme", sobrenome: "Silva", setor: "Pista", idade: 15},
    {nome: "Giovanna", sobrenome: "Grigio", setor: "Arquibancada", idade: 18},
    {nome: "Marcelo", sobrenome: "Gomes", setor: "Arquibancada", idade: 20},
    {nome: "Ricardo", sobrenome: "Spíndola", setor: "Arquibancada", idade: 17},
]
var listaDeConvidados = [convidados];


function liberarBebidas(listaDeConvidados){*/
    var listaDeConvidadosFinal = [];
    var idadeObj = listaDeConvidados[convidados.idade];
    
    if(idadeObj > 17){
        listaDeConvidados.openBar = true;
    }else{
        listaDeConvidados.openBar = false;
    }
    listaDeConvidadosFinal.push(idadeObj)
    console.log(listaDeConvidados)
}