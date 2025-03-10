// o que é uma funçao
// um bloco de código que executa/faz algo

//               parametros
function somarValores(valor1, valor2){
  var resultado = valor1 + valor2
  // 7
  return resultado
}

// console.log(somarValores(3, 50))
// console.log(somarValores(32, 50))
// console.log(somarValores(34, 50))
// console.log(somarValores(3965, 50))

// o que são loops?
// repetição -> estruturas de repetição
// for -> para executar um código varias vezes
// for -> para percorrer um array/ olhar todos os valores de um array

// array -> []
// 
//posição/index/indice/SENHA 0         1       2        3 
var numeros = ["beatriz", "tabs", "davi", "carlos"];
// dahsodhioa(['dbisai', 'nsalnd'])
// // ["d", "n"]
// variavel de incremento/contador
// condição para parar o loop
// incremento
// for(var i = 0; i < numeros.length; i++){
//  console.log(numeros[i]);
// }

exibirNome();

// LET -> defini uma variavel local e flexivel
function exibirNome(){
    let nome = "Joao"
    nome = "duda"
    console.log(nome);
}

exibirNome();
console.log("variavel nome fora da funcao: " + nome)

// CONST -> defini uma variavel que nao irá mudar
const cpfBeatriz = "123.456.789-00"
const perfumes = [ 
    {nome: "boticario1", preco: 1234},
    {nome: "boticario2", preco: 1236},
    {nome: "boticario3", preco: 1237},
    {nome: "boticario4", preco: 1238},
]

// perfumes[0].nome = "teste";

// variaveis -> armazenar STRING/BOOLEAN/NUMBER/LISTA/FUNCTIONS

// função anonima -> função que nao tem nome 
// obs: elas executam uma pequena parte de uma função maior
const somar = function (valor1,valor2){
      return valor1 + valor2;
}

// arrow function -> simplificação da função anonima (sigla)
const subtrair = (valor1, valor2) => {
   return valor2 - valor1;
}

const exibir = (valor) => {
   console.log(valor)
}

function calculadora(a,b){
   let resultadoSoma = somar(a,b);
   let resultadoSubtracao = subtrair(a,b);
   exibir(resultadoSoma);
   exibir(resultadoSubtracao);
}


