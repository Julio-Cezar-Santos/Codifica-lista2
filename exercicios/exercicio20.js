const prompt = require('prompt-sync')();

const empregados = [
    { matricula: 1, nome: "João Silva", salarioBruto: 3000.00 },
    { matricula: 2, nome: "Maria Souza", salarioBruto: 4500.00 },
];

function calcularINSS(salarioBruto) {
    return salarioBruto * 0.12;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
}

function emitirContracheque(empregado) {
    const deducaoINSS = calcularINSS(empregado.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(empregado.salarioBruto, deducaoINSS);

    console.log(`Matrícula: ${empregado.matricula}`);
    console.log(`Nome: ${empregado.nome}`);
    console.log(`Salário bruto: R$ ${empregado.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    console.log('---------------------------------------');
}

function processarFolhaPagamento(empregados) {
    empregados.forEach(emitirContracheque);
}

function buscarEmpregadoPorMatricula(matricula) {
    return empregados.find(e => e.matricula === matricula);
}


function cadastrarEmpregado() {
    const matricula = parseInt(prompt('Digite a matrícula do empregado: '));
    const nome = prompt('Digite o nome do empregado: ');
    const salarioBruto = parseFloat(prompt('Digite o salário bruto do empregado: '));

    if (buscarEmpregadoPorMatricula(matricula)) {
        console.log('Já existe um empregado com essa matrícula.');
        return;
    }
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        console.log('Salário inválido.');
        return;
    }
    if (!nome) {
        console.log('Nome inválido.');
        return;
    }
    empregados.push({ matricula, nome, salarioBruto });
    console.log('Empregado cadastrado com sucesso.');
}

function mostarMenu() {
    console.log("1 - Emitir contracheque de todos os empregados");
    console.log("2 - Emitir contracheque de um empregado");
    console.log("3 - Cadastrar empregado");
    console.log("4 - Sair");
}

function obterOpcao() {
    let opcao = parseInt(prompt('Escolha uma opção: '));
    while (isNaN(opcao) || opcao < 1 || opcao > 4) {
        console.log('Opção inválida.');
        opcao = parseInt(prompt('Escolha uma opção: '));
    }
    return opcao;
}

mostarMenu();
let opcao = obterOpcao();
while (opcao !== 4) {
    switch (opcao) {
        case 1:
            processarFolhaPagamento(empregados);
            break;
        case 2:
            matricula = parseInt(prompt('Digite a matrícula do empregado: '));
            const empregado = buscarEmpregadoPorMatricula(matricula);
            if (empregado) {
                emitirContracheque(empregado);
            } else {
                console.log('Empregado não encontrado.');
            }
            break;
        case 3:
            cadastrarEmpregado();
            break;
        default:
            console.log('Opção inválida.');
            break;
    }
    mostarMenu();
    opcao = obterOpcao();
}
console.log(empregados)
console.log('Programa encerrado.');