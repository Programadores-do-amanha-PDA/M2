// Um dispositivo de som precisa armazenar algumas informações para controlar o
//  áudio corretamente. Ele tem um nível de volume que pode ser aumentado ou
//  diminuído pelo usuário.

var ouvinte = {
    nome: "bea",
    // nao faz sentido uma pessoa ter um volume
    volume: 7
}
// volume é uma caracteristica DE QUEM? DO SOM

// CLASSE -> Som
// ATRIBUTOS -> volume

// Tarefa:
// Crie uma estrutura para representar essa informação.
// Implemente um método que permita aumentar o volume.

class Som{
    //         atributo
    constructor(volume){
        // variavel   parametro
        this.volume = volume;
    }

    // método que aumenta o volume de 1 em 1
    aumentar(){
    // acessando a variavel e alterando seu valor
        this.volume = this.volume + 1;
    }

    // método que diminui o volume de 1 em 1
    diminuir(){
    // acessando a variavel e alterando seu valor
        this.volume = this.volume - 1;
    }
}

const mp3 = new Som(13);
mp3.volume // 13
mp3.aumentar() // 14
mp3.aumentar() // 15
mp3.aumentar() // 16

mp3.diminuir() // 15
mp3.diminuir() // 14
mp3.diminuir() // 13
mp3.diminuir() // 12


var restaurante = {
  funcionarios: [],
  cardapio: [],
  clientes: [],
  formaPagamento: [],
  pedidos: []
}

// Gerenciamento de Restaurante
// Em um restaurante, os garçons anotam pedidos, a cozinha prepara os pratos, e os clientes fazem pagamentos. 
// No contexto de um sistema de restaurante, qual é o objeto principal a ser representado em POO? 
// R: Restaurante
// o cliente vai ao RESTAURANTE
// o cardápio pertence ao RESTAURANTE
// o funcionario trabalha no RESTAURANTE
// o pedido é feito para RESTAURANTE

// Aplicativo de Transporte
// Em um aplicativo de transporte como Uber, os passageiros solicitam viagens, 
// os motoristas aceitam corridas e os carros levam os passageiros até o destino. 
// Qual entidade seria um objeto principal no sistema?
// R: Viagem
// o passageiro solicita uma VIAGEM 
// o motorista aceita uma VIAGEM 
// o app gerencia as VIAGENS 

// Loja Virtual
// Em uma loja online, os clientes escolhem produtos, adicionam itens ao carrinho e fazem compras. 
// Qual seria um possível objeto nesse sistema? 
// R: Produto
// o cliente busca um PRODUTO
// o funcionario vende um PRODUTO
// o carrinho adiciona um PRODUTO

// Aplicativo de Música
// Um aplicativo de streaming de música armazena informações sobre cada música disponível. 
// Quais seriam os atributos principais de uma música dentro do sistema?
const musica = {
    genero: "",
    nome: "",
    album: "",
    artista: "",
    tempo: 180,
    anoLancamento: 2020
}

// Cadastro de Veículos
// Um sistema de gestão de veículos precisa registrar informações sobre carros. 
// Quais atributos são essenciais para representar um carro nesse sistema?
const veiculo = {
    nome: "",
    marca: "",
    placa: "",
    ano: 2020,
    dono: "bea",
    combustivel: "flex"
}

// Plataforma de Cursos Online
// Uma plataforma de ensino online gerencia vários cursos. 
// Quais atributos são importantes para representar um curso dentro do sistema?
const curso = {
    nome: "",
    cargaHoraria: 200,
    categoria: "matematica",
    objetivo: "este curso é para desnvolvimento",
    preco: 140,
    quantidadeAulas: 30,
    quantidadeModulos: 3
}

// Gerenciamento de Produtos
// Uma loja precisa de um sistema para gerenciar seus produtos. 
// Crie uma classe chamada Produto que tenha os atributos nome, preço, 
// quantidade em estoque e categoria.
class Produto{
    constructor(nome, preco,quantidadeEstoque,categoria){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categoria = categoria;
    }
}

// Registro de Funcionários
// Uma empresa deseja registrar seus funcionários. 
// Crie uma classe chamada Funcionario que tenha os atributos nome, cargo, 
// salário e departamento.
class Funcionarios { constructor(nome, cargo, salario, departamento){ this.nome = nome; this.cargo = cargo; this.salario = salario; this.departamento = departamento; } } const funcionario1 = new Funcionarios("Jaqueline", "DEV", 7000, "Desenvolvimento de softwares");

// Cadastro de Alunos
// Uma escola de ensino fundamental solicitou um sistema tecnológico para o 
// cadastro de alunos. Crie um código que represente esses estudantes, 
// onde cada estudante deve conter um nome, idade, endereço e responsável.
class Aluno{
    constructor(nome, idade, endereco,responsavel){
        this.idade = idade;
        this.endereco = endereco;
        this.nome = nome;
        this.responsavel = responsavel;
    }
}

