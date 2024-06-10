const prompt = require('prompt-sync')();


function exercicio3() {

    function calcularPassagem(distancia) {
        let valorPassagem;

        if (distancia <= 200) {
         valorPassagem = distancia * 0.5;
        } else {
            valorPassagem = 100 + 0.45 * (distancia - 200);
        }
        return console.log(`O valor da passagem é R$ ${valorPassagem.toFixed(2)}`);
    }

    let distancia = Number(prompt('Quantos km você deseja percorrer? '));

    while (isNaN(distancia) || distancia < 0) {
        console.log('Por favor, digite um número válido.');
        distancia = Number(prompt('Quantos km você deseja percorrer? '));
    }

    calcularPassagem(distancia);
}

exercicio3();