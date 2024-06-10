const prompt = require('prompt-sync')();

function validarPrompt(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor < 0) {
        console.log('Valor inválido, tente novamente');
        valor = Number(prompt(mensagem));
    }
    return valor;
}

module.exports = validarPrompt;