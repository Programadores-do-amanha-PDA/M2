
//                      parametros
// function somarValores(valor1, valor2){
//   var resultado = valor1 + valor2
//   // 7
//   return resultado
// }

// function exibir(){
  
// }

// //         argumento
// somarValores(exibir)

// função anonima -> função que nao tem nome 
// obs: elas executam uma pequena parte de uma função maior
const somar = function (valor1,valor2){
      return valor1 + valor2;
}

// arrow function -> simplificação da função anonima (sigla)
const subtrair = (valor1, valor2) => {
   return valor1 - valor2;
}

const multiplicar = (valor1, valor2) => {
   return valor1 * valor2;
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

// callbacks -> uma função que é passada como ARGUMENTO de outra função
// porque utilizar ? Para deixar as funções mais genericas e reutilizaveis

function calculadoraPro(valor1,valor2,operacao){
   return operacao(valor1,valor2)
}

//      callback
// exibir(somar(3,5));


// exibir(calculadoraPro(30,25,multiplicar));
// a função exibir esta recebendo a funcao calculadoraPro, essa função
// esta recebendo 2 valores numericos e um callback(uma função)
// essa funcao esta sendo chamada dentro da calculadoraPro e o resultado
// sendo exibido no console pela função exibir

// DOM -> descrição escrita do HTML
// no html tem uma tag doctype
// dentro da tag doctype tem uma tag html
// dentro da tag html tem um head 
// abaixo da tag head tem a tag body
// dentro da tag body tem uma tag h1
// na tag h1 esta escrito "Aula 2 do modulo 2"
// abaixo da tag h1 tem uma tag script

const btnClick = document.getElementsByTagName("button")[0];

// adicionar evento ouvinte -> que vamos adicionar uma ação/função que vai 
// ficar o tempo todo em alerta! Quando for solicitada vai ser executada

// btnClick é o nosso botao
// addEventListener é a função responsavel por adicionar
// uma ação a uma interação do usuario

const verificarOperacao = (valor1, valor2, operacao) => {
    // verificar qual operação o usuario digitou e executar a função correspondente
    if(operacao === "somar"){
      // chamar a função que calcula, passar os valores e a operação
      let resultado = calculadoraPro(valor1,valor2, somar);
      // exibir resultado no console
      exibir(resultado)
   }else if(operacao === "multiplicar"){
      // chamar a função que calcula, passar os valores e a operação
      let resultado = calculadoraPro(valor1,valor2, multiplicar);
      // exibir resultado no console
      exibir(resultado)
   }else if(operacao === "subtrair"){
      // chamar a função que calcula, passar os valores e a operação
      let resultado = calculadoraPro(valor1,valor2, subtrair);
      // exibir resultado no console
      exibir(resultado)
   }else{
      alert("operação invalida")
   }
}
// qual a ação -> "click"
// qual função será executada -> funcao anonima
btnClick.addEventListener("click", function (){
   // pegar valores que o usuario digitou
   let valor1 = Number(prompt("digite o valor 1"));
   let valor2 = Number(prompt("digite o valor 2"));

   // pegar operação que o usuario quer fazer
   let operacao = prompt("digite uma operaçao").toLowerCase();
   verificarOperacao(valor1,valor2,operacao)
})

// Alterando o texto do h1 da DOM
document.getElementsByTagName("h1")[0].innerText = 'teste alteração';

// METODOS PARA SELECIONAR um elemento da DOM (tag)
// getElementById
// getElementsByTagName
// querySelector

// GET ELEMENT BY ID -> Pega um unico elemento
const titulo = document.getElementById("idDaTag");
// console.log(titulo)
// <h1 id="idDaTag">titulo</h1>

// GET ELEMENT BY TAG NAME -> Pega TODOS os elementos daquela tag
const paragrafos = document.getElementsByTagName("p")[2];
//console.log(paragrafos)

// . representa a busca por classes
const teste = document.querySelector(".subtitulo");

// # representa a busca por id
const teste1 = document.querySelector("#idDaTag");

// busca tag
const teste2 = document.querySelector("p");

// ['<p>1</p>', '<p>2</p>', '<p>3</p>']

// A ideia da DOM no javascript é alterar o HTML de acordo com a interação
// do usuario 

// innerHTML altera a estrutura do HTML (adicionando tags/class/ids)
// titulo.innerHTML = `<li>dsaodhsaodip</li>`

// innerText altera o texto
// titulo.innerText = ''


