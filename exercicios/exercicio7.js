const prompt = require('prompt-sync')();

function promptValidado(mensagem) {
    let valor = parseInt(prompt(mensagem));

    while (isNaN(valor) || valor < 0){
        console.log('Valor inválido, tente novamente');
        valor = parseInt(prompt(mensagem));
    }
    return valor;
}

function calcularCusto(escolhaCarro, dias, km) {
    if(escolhaCarro === 1){
        let custoDia = 90 * dias;
        let custoKm;
        if (km <= 100) {
            custoKm = 0.20 * km;
        } else {
            custoKm = 0.20 * 100 + 0.10 * (km - 100);
        }
        return custoDia + custoKm;
    } else {
        let custoDia = 150 * dias;
        let custoKm;
        if (km <= 200) {
            custoKm = 0.30 * km;
        } else {
            custoKm = 0.30 * 100 + 0.25 * (km - 200);
        }
        return custoDia + custoKm;
    }
}

console.log('Escolha o carro que deseja alugar:');
console.log('1 - Carro popular');
console.log('2 - Carro de luxo');
let escolhaCarro = prompt('Escolha uma opção: ');

while (escolhaCarro !== '1' && escolhaCarro !== '2'){
    console.log('Valor inválido, tente novamente');
    escolhaCarro = prompt('Escolha uma opção: ');
}

escolhaCarro = parseInt(escolhaCarro);

let dias = promptValidado('Quantos dias você deseja ficar com o carro? ');
let km = promptValidado('Quantos km percorridos? ');

let custo = calcularCusto(escolhaCarro, dias, km);

console.log(`O valor total do aluguel é de R$${custo}`);