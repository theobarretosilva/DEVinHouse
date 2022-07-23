function verificarClassificacao(){
    const idade = document.getElementById('idade').value;

    if(idade <= 15){
        alert("Você é um jovem")
    }else if(idade >= 16 && idade <= 64){
        alert("Você é um adulto")
    }else if(idade >= 65){
        alert("Você é um idoso")
    }
}