const promptValidado = require("./validarPrompt");

let horasExercitadas = promptValidado('Quantas horas você se exercitou hoje? ');

function calcularPontos(horasExercitadas) {
    if (horasExercitadas < 10) {
        return horasExercitadas * 2;
    } else if (horasExercitadas < 20) {
        return horasExercitadas * 5;
    } else {
        return horasExercitadas * 10;
    }
}

function calcularGanhos(pontos) {
    return pontos * 0.05;
}

let pontos = calcularPontos(horasExercitadas);
let ganhos = calcularGanhos(pontos);

console.log(`Você fez ${horasExercitadas} horas de exercício e ganhou ${pontos} pontos que valem R$ ${ganhos.toFixed(2)}`);