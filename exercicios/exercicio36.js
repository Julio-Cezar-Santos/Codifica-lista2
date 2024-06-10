function gerarRespostas() {
    let respostas = [];
    for (let i = 0; i < 13; i++) {
        respostas.push(Math.floor(Math.random() * 100) + 1);
    }
    return respostas;
}

function verificarApostas() {
    for (let i = 0; i < jogadas.length; i++) {
        if (jogadas[i].respostas === gabarito) {
            console.log(`"Parabéns ${jogadas[i].id}, tu foi o GANHADOR".`);
        }
    }
}
function gerarId() {
    if (jogadas.length > 0) {
        let ultimoId = jogadas[jogadas.length - 1].id;
        return ultimoId + 1;
    } else {
        return 1;
    }
}

function gerarRespostas() {
    let respostas = [];
    for (let i = 0; i < 13; i++) {
        respostas.push(Math.floor(Math.random() * 13) + 1);
    }
    return respostas;
}

function gerarApostadores() {
    for (let i = 0; i < 100; i++) {
        let id = gerarId();
        let respostas = gerarRespostas();
        jogadas.push({ id, respostas });
    }
}

let gabarito = gerarRespostas();

let jogadas = [];

gerarApostadores();

//jogadas.push({ id: 101, respostas: gabarito })

verificarApostas();

console.log("Gabarito:", gabarito);

