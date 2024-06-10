const promptValidado = require("./validarPrompt");

let salariosMulheres = [];
let salariosHomens = [];

function mostrarMenu(){
    console.log('\n1 - Cadastrar salário de mulher');
    console.log('2 - Cadastrar salário de homem');
    console.log('3 - Mostrar total salarial das mulheres');
    console.log('4 - Mostrar total salarial dos homens');
    console.log('5 - Sair \n');
    return Number(promptValidado('Escolha uma opção: '));
}

function calcularSalarios(salarios){
    return salarios.reduce((acumulador, salario) => acumulador + salario, 0);
}

let opcao = mostrarMenu();
console.log(opcao);
while (opcao !== 5){
    if (opcao === 1){
        let salarioMulher = promptValidado('Digite o salário da mulher: ');
        salariosMulheres.push(salarioMulher);
    } else if (opcao === 2){
        let salarioHomem = promptValidado('Digite o salário do homem: ');
        salariosHomens.push(salarioHomem);      
    } else if (opcao === 3){
        let totalSalariosMulheres = calcularSalarios(salariosMulheres);
        console.log(`O total salarial das mulheres é de R$ ${totalSalariosMulheres}`);
    } else if (opcao === 4){
        let totalSalariosHomens = calcularSalarios(salariosHomens);
        console.log(`O total salarial dos homens é de R$ ${totalSalariosHomens}`);
    } else {
        console.log('Opção inválida\n');
    }
    opcao = mostrarMenu();
}