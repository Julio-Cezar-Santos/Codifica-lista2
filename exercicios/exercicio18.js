const prompt = require('prompt-sync')();

function adicionarFuncionario() {
    const funcionario = {
        nome: prompt('Digite o nome do funcionário: '),
        cargo: prompt('Digite o cargo do funcionário: '),
        salario: Number(prompt('Digite o salário do funcionário: '))
    }

    while (!funcionario.nome || !funcionario.cargo || !funcionario.salario
        || isNaN(funcionario.salario) || funcionario.salario < 0) {
        console.log('Valor inválido, tente novamente');
        funcionario.nome = prompt('Digite o nome do funcionário: ');
        funcionario.cargo = prompt('Digite o cargo do funcionário: ');
        funcionario.salario = Number(prompt('Digite o salário do funcionário: '));
    }

    return funcionario;
}

const funcionario = adicionarFuncionario();

console.log(funcionario);
