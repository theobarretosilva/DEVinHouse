const operacao = prompt("Qual operação você deseja fazer? ('+' soma, '-' subtração, '*' multiplicação, '/' divisão");
    
if(operacao === "+"){
    const aNum1 = parseInt(prompt("Digite o primeiro número:"));
    const aNum2 = parseInt(prompt("Digite o segundo número:"));
    console.log(aNum1+aNum2);
}else if(operacao === "-"){
    const bNum1 = parseInt(prompt("Digite o primeiro número:"));
    const bNum2 = parseInt(prompt("Digite o segundo número:"));
    console.log(bNum1-bNum2);
}else if(operacao === "*"){
    const cNum1 = parseInt(prompt("Digite o primeiro número:"));
    const cNum2 = parseInt(prompt("Digite o segundo número:"));
    console.log(cNum1*cNum2);
}else if(operacao === "/"){
    const dNum1 = parseInt(prompt("Digite o primeiro número:"));
    const dNum2 = parseInt(prompt("Digite o segundo número:"));
    console.log(dNum1/dNum2);
}