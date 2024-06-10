function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};

    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
            resultado[categoria] = { transacoes: [], subtotal: 0 };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
    });

    return resultado;
}

const transacoes = [
    { id: 1, valor: 100.50, data: '2024-01-01', categoria: 'Alimentação' },
    { id: 2, valor: 200.00, data: '2024-01-02', categoria: 'Transporte' },
    { id: 3, valor: 150.75, data: '2024-01-03', categoria: 'Alimentação' },
    { id: 4, valor: 250.10, data: '2024-01-04', categoria: 'Lazer' },
    { id: 5, valor: 300.45, data: '2024-01-05', categoria: 'Transporte' },
    { id: 6, valor: 400.00, data: '2024-01-06', categoria: 'Educação' },
    { id: 7, valor: 350.30, data: '2024-01-07', categoria: 'Lazer' },
    { id: 8, valor: 450.50, data: '2024-01-08', categoria: 'Educação' },
    { id: 9, valor: 500.00, data: '2024-01-09', categoria: 'Alimentação' },
    { id: 10, valor: 600.75, data: '2024-01-10', categoria: 'Lazer' }
];

const resultado = agruparTransacoesPorCategoria(transacoes);

console.log(JSON.stringify(resultado, null, 2))