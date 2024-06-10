const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let contadorIdHotel = 1;
let contadorIdReserva = 1;

function adicionarHotel(nome, cidade, quartosTotais) {
    let hotel = {
        id: contadorIdHotel++,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    };
    hoteis.push(hotel);
    console.log(`Hotel ${nome} adicionado com sucesso!`);
}

function buscarHoteisPorCidade(cidade) {
    let hoteisEncontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    if (hoteisEncontrados.length > 0) {
        console.log(`Hotéis disponíveis em ${cidade}:`);
        hoteisEncontrados.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
        });
    } else {
        console.log(`Nenhum hotel encontrado em ${cidade}.`);
    }
}

function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel) {
        if (hotel.quartosDisponiveis > 0) {
            hotel.quartosDisponiveis--;
            let reserva = {
                idReserva: contadorIdReserva++,
                idHotel: idHotel,
                nomeCliente: nomeCliente
            };
            reservas.push(reserva);
            console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
        } else {
            console.log(`Desculpe, o hotel ${hotel.nome} não tem quartos disponíveis.`);
        }
    } else {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
    }
}

function cancelarReserva(idReserva) {
    let reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (reserva) {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        if (hotel) {
            hotel.quartosDisponiveis++;
            reservas = reservas.filter(reserva => reserva.idReserva !== idReserva);
            console.log(`Reserva ${idReserva} cancelada com sucesso.`);
        } else {
            console.log(`Hotel associado à reserva não encontrado.`);
        }
    } else {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
    }
}

function listarReservas() {
    if (reservas.length > 0) {
        console.log("Lista de reservas:");
        reservas.forEach(reserva => {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
        });
    } else {
        console.log("Nenhuma reserva encontrada.");
    }
}

function menu() {
    let opcao;
    do {
        console.log(`
            Menu do Sistema de Reserva de Hotéis
            1. Adicionar Hotel
            2. Buscar Hotéis por Cidade
            3. Fazer Reserva
            4. Cancelar Reserva
            5. Listar Reservas
            6. Sair
        `);
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                let nomeHotel = prompt("Nome do Hotel: ");
                let cidadeHotel = prompt("Cidade do Hotel: ");
                let quartosTotais = parseInt(prompt("Número de Quartos Totais: "), 10);
                adicionarHotel(nomeHotel, cidadeHotel, quartosTotais);
                break;
            case '2':
                let cidadeBusca = prompt("Cidade: ");
                buscarHoteisPorCidade(cidadeBusca);
                break;
            case '3':
                let idHotelReserva = parseInt(prompt("ID do Hotel: "), 10);
                let nomeCliente = prompt("Nome do Cliente: ");
                fazerReserva(idHotelReserva, nomeCliente);
                break;
            case '4':
                let idReservaCancela = parseInt(prompt("ID da Reserva: "), 10);
                cancelarReserva(idReservaCancela);
                break;
            case '5':
                listarReservas();
                break;
            case '6':
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '6');
}

menu();