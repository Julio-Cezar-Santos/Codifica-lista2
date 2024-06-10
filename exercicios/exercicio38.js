const criarMatriz = require('./criarMatriz')
const prompt = require('prompt-sync')()

let vetor = criarMatriz(1, 6).shift()

function somaElementos(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma
}

function produtoElementos(vetor) {
    let produto = 1
    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i]
    }
    return produto
}

function mediaElementos(vetor) {
    return somaElementos(vetor) / vetor.length
}

function ordenarCrescente(vetor) {
    return vetor.sort((a, b) => a - b)
}

let mensagem = `
Escolha uma opção:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordenar os elementos em ordem crescente
5 - Mostrar o vetor
6 - Sair`

console.log(mensagem)
let escolha = parseInt(prompt())

while (escolha !== 6) {
    switch (escolha) {
        case 1:
            console.log('Soma dos elementos:', somaElementos(vetor))
            break
        case 2:
            console.log('Produto dos elementos:', produtoElementos(vetor))
            break
        case 3:
            console.log('Média dos elementos:', mediaElementos(vetor))
            break
        case 4:
            console.log('Elementos ordenados em ordem crescente:', ordenarCrescente(vetor))
            break
        case 5:
            console.log('Vetor:', vetor)
            break
        default:
            console.log('Opção inválida!')
    }
    console.log(mensagem)
    escolha = parseInt(prompt())
}
