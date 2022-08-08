function sleep(valor){
    return new Promise((res, rej) => {
        setTimeout(valor, 3000);
    })
}