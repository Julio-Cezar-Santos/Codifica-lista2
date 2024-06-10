const prompt = require('prompt-sync')();

function solicitaHorario(mensagem) {
    return parseInt(prompt(mensagem));
}

function horarioEhValido(hora, minuto, segundo) {
    return !isNaN(hora) && !isNaN(minuto) && !isNaN(segundo) &&
           hora >= 0 && hora <= 23 &&
           minuto >= 0 && minuto <= 59 &&
           segundo >= 0 && segundo <= 59;
}

let i = 0;
while(i < 5) {
    let hora = solicitaHorario('Digite a hora: ');
    let minuto = solicitaHorario('Digite o minuto: ');
    let segundo = solicitaHorario('Digite o segundo: ');

    if (horarioEhValido(hora, minuto, segundo)) {
        console.log(`Horário: ${hora}:${minuto}:${segundo}`);
        i++;
    } else {
        console.log('Horário inválido, tente novamente.');
    }
}