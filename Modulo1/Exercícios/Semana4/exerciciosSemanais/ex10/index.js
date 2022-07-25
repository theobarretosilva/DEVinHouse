const data = document.getElementById('data');
const titulo = document.getElementById('tituloEstacao');
const imagem = document.getElementById('imagemEstacao');

const atualizarDeAcordoEstacao = ({h1, img}) => {
    titulo.innerText = h1;
    imagem.src = img;
};

const verificaEstacao = (event) => {
    const dataFormatada = new Date(`${event.target.value} 00:00`);

    if(!(dataFormatada instanceof Date) || isNaN(dataFormatada)){
        alert('Data inválida!');
        return;
    };

    const dia = dataFormatada.getDate();
    const mes = dataFormatada.getMonth() + 1;

    if((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)){
        atualizarDeAcordoEstacao({ h1: 'Outono', url: './imgs/outono.jpg'});
        return;
    }
    if((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)){
        atualizarDeAcordoEstacao({ h1: 'Inverno', url: './imgs/inverno.jpg'});
        return;
    }
    if((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)){
        atualizarDeAcordoEstacao({ h1: 'Primavera', url: './imgs/primavera.jpg'});
        return;
    }
        
    atualizarDeAcordoEstacao({ h1: 'Verão', url: './imgs/verao.png'});
    
};