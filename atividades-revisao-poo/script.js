// Um dispositivo de som precisa armazenar algumas informações para controlar o
//  áudio corretamente. Ele tem um nível de volume que pode ser aumentado ou
//  diminuído pelo usuário.

var ouvinte = {
    nome: "bea",
    // nao faz sentido uma pessoa ter um volume
    volume: 7
}
// CLASSE -> Som
// ATRIBUTOS -> volume

class Som{
    constructor(volume){
        this.volume = volume;
    }
}

const mp3 = new Som(13);
mp3.volume // 13

// verificar quem poderia ter aquelas caracteristicas
// volume é uma caracteristica DE QUEM? DO SOM

// Tarefa:
// Crie uma estrutura para representar essa informação.
// Implemente um método que permita aumentar o volume.

var restaurante = {
  funcionarios: [],
  cardapio: [],
  clientes: [],
  formaPagamento: [],
  pedidos: []
}

const carro = {
    roda: 4,
    nome: "",
    marca: "",
    modelo: ""
}


// o passageiro solicita uma VIAGEM - []
// o motorista aceita uma VIAGEM - []
// o app gerencia as VIAGENS - []

// o cliente busca um PRODUTO
// o funcionario vende um PRODUTO
// o carrinho adiciona um PRODUTO

const musica = {
    genero: "",
    nome: "",
    album: "",
    artista: "",
    tempo: 180,
    anoLancamento: 2020
}

const veiculo = {
    nome: "",
    marca: "",
    placa: "",
    ano: 2020,
    dono: "bea",
    combustivel: "flex"
}

const curso = {
    nome: "",
    cargaHoraria: 200,
    categoria: "matematica",
    objetivo: "este curso é para desnvolvimento",
    preco: 140,
    quantidadeAulas: 30,
    quantidadeModulos: 3
}


