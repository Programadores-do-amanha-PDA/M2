// classe é um MODELO de OBJETO
class Pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

// ERRADO
// class Pessoa2{
//     constructor(nome, idade, cpf, dataNasc){
//         this.nome = nome;
//         this.idade = idade;
//         this.cpf = cpf;
//         this.dataNasc = dataNasc;
//     }
// }

class Funcionario extends Pessoa{
    constructor(nome, idade, cpf, dataNasc){
        super(nome, idade, cpf);
        this.dataNasc = dataNasc
    }
}

class Esporte{
    constructor(nome, times, jogos){
        this.nome = nome;
        this.times = times;
        this.jogos = jogos;
    }
}

const volei = new Esporte("volei",["time A", "time B"], []);
const atletismo = new Esporte("volei",["time A", "time B"], []);
const xadrez = new Esporte("volei",["time A", "time B"], []);

class VoleiSuper extends Esporte{
    constructor(nome, times, jogos, sets){
        super(nome, times, jogos);
        this.sets = sets;
    }
}

class Atletismos extends Esporte{
    constructor(nome, selecoes, jogos){
        super(nome,jogos);
        this.selecoes = selecoes;
    }
}


// HOISTING -> chamar antes da declaração

// ERRADO
// console.log(nome);
// const nome = "Beatriz";


// MEIO CERTO 
console.log(somar(2,3))
function somar(a,b){
    return a + b
}

// HOISTING função(function) funciona antes da sua declaração, mas variaveis não!
// UNHOISTED funções funcionam depois da sua declaração, variaveis tambem!

// UNHOISTED -> chamar depois da declaração
function somar(a,b){
    return a + b
}
console.log(somar(2,3))

var nome = "Beatriz";
console.log(nome);

const subtrair = (a,b) => {
    return a - b
}
console.log(subtrair(30,3));


// Arrow Function -> uma função anonima simplificada

// função anonima completa  function (a,b){}
const multiplicar = function (a,b) {
    return a*b
}

// função anonima simplificada (a,b) => {}
const multiplicarSimplificado = (a,b) =>{
    return a*b
}

// Operação Ternária -> um if/else simplificado
const almocou = true

// if/else completo UNO WAY
if(almocou === true){
    console.log("vou comer a sobremesa") 
}else{
    console.log("nao vai comer a sobremesa") 
}

// return ele sempre vai funcionar dentro de um bloco de código
// if/else simplificado MERCEDES
const result = (almocou === true) ? "vou comer a sobremesa": "nao vai comer a sobremesa";
console.log(result);

// MÉTODOS DO ARRAY
const nomes = [];

// Push adiciona um elemento no final do array
nomes.push("Davi");
console.log(nomes)
// unshift / shift / pop

// MÉTODOS DE VISUALIZAÇÃO
// Map -> criar um novo array e executar o mesmo código para TODOS OS ELEMENTOS
const numeros = [1,2,3,4,5,6];
const qualNumero = numeros.map(numero => `numero: ${numero}`)
//callbackfn -> usar uma outra função como parâmetro
console.log(qualNumero)

const carrinhoShein = [100,250,60,400];
const carrinhoSheinComDesconto = carrinhoShein.map(preco => preco - (preco * 0.10));
console.log(carrinhoSheinComDesconto);

const nomeAlunos = ['Erick',  'Luis', 'Nyvea', 'Luana'];
const nomesMaiusculos = nomeAlunos.map(aluno => aluno.toUpperCase())
console.log(nomesMaiusculos)

const produtos = [
    {nome: "batata", preco: 3.00},
    {nome: "feijão", preco: 15.00},
    {nome: "salada", preco: 1.50},
]

const apresentacaoProdutos = produtos.map(produto => `${produto.nome} sai por apenas ${produto.preco}`);
console.log(apresentacaoProdutos)

// Dada uma lista de palavras, use map para transformar todas em letras maiúsculas.
// frutas = ['banana', 'maçã', 'laranja', 'uva']

// Dada uma lista de palavras, use map para gerar uma nova lista com o número de letras de cada palavra.
// animais = ['cachorro', 'gato', 'elefante', 'leão']

// Dada uma lista de números, use map para transformá-los em multiplos de 3
// numeros = [10, 20, 30, 40]
