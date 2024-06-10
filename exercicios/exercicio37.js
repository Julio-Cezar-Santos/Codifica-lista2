function sortearLetra() {
    var letras = ['A', 'B'];
    var indice = Math.floor(Math.random() * letras.length);
    return letras[indice];
}

function gerarRespostas() {
    let respostas = [];
    for (let i = 0; i < 20; i++) {
        respostas.push(sortearLetra());
    }
    return respostas;
}

function respostasAlunos() {
    let alunos = [];
    for (let i = 0; i < 50; i++) {
        let respostas = gerarRespostas();
        alunos.push({ id: i + 1, respostas });
    }
    return alunos;
}

function verificarRespostas() {
    let gabarito = gerarRespostas();
    let alunos = respostasAlunos();
    //alunos[49].respostas = gabarito. ninguem ta passando kkkkkk, mas se quiser testar;
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        let acertosAluno = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (aluno.respostas[j] === gabarito[j]) {
                acertosAluno++;
            }
        }
        if (acertosAluno >= 12) {
            console.log(`Parabéns aluno ${aluno.id}, você acertou ${acertosAluno} questões e foi aprovado!`);
        } else {
            console.log(`Aluno ${aluno.id}, você acertou apenas ${acertosAluno} questões e foi reprovado.`);
        }
    }
}

verificarRespostas();