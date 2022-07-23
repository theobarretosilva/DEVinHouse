
function parOuImpar(){
    const valor = document.getElementById('valor').value;
    const total = valor/2;
    if(valor%2 == 0){
        alert("Par")
    }else{
        alert("Ímpar")
    }
}