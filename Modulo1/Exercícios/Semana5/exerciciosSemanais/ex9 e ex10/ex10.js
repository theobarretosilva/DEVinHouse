function horarioAtual(){
    const hora = new Date().toLocaleTimeString();
    console.log(hora)
}

setInterval(horarioAtual, 2000)