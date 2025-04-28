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


