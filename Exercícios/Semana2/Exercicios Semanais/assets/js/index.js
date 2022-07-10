function mostrar(){
    var name = document.querySelector("#nome");
    var nome = name.value;

    var Email = document.querySelector("#email");
    var email = Email.value;

    var Descricao = document.querySelector("#descricao");
    var descricao = Descricao.value;

    console.log(
    "Formulário de contato => Nome: " + nome + " - E-mail: " + email + " - Descrição: " + descricao);

    alert("Formulário enviado com sucesso");
}