// REVISÃO INICIAL

// TIPOS DE VARIAVEIS -> LET / CONST
// LET -> todos as informações alteraveis 
let idade = 50
idade = 30
idade = 40
idade = 25

// CONST -> todas as informações constantes, que nao podem ser alteradas
const nome = "Beatriz";

// VARIAVEIS -> STRING/NUMBER/BOOLEAN(TRUE/FALSE)/ARRAY(LISTA)/FUNCTION

// ARMAZENANDO UMA FUNÇÃO DENTRO DE UMA VARIAVEL
const somar = (parametro1, parametro2) => {
   return parametro1 + parametro2
}

const resultado = somar(2,9);
// const resultado = 11

// CALLBACKS -> FUNÇÕES PASSADAS COMO PARAMETRO DE OUTRA FUNÇÃO
// porque utilizar -> generalizar funções ou especificar as funções a serem executas
// quem chamou fale o que quer que eu faça

const calculadora = (valor1, valor2, operacao) => {
    // somar(valor1, valor2);
    // subtrair(valor1,valor2);
    return operacao(valor1,valor2);
}

const resultadoCallback = calculadora(4,6,somar)    
// const resultadoCallback = 10

// DOM -> descrição escrita das tags HTML 
// SELETORES de tags 
// getElementById -> busca uma unica tag por id
// getElementByTagName -> busca uma lista(array) de tags
// getElementByClassName -> busca uma lista(array) de tags por classe

// alterando tag de texto
const titulo = document.getElementsByTagName("h1")[0];
titulo.innerText = "teste alteração";

// recebendo valor de um input
const logado = document.getElementsByTagName("input")[0];
const btnEntrar = document.getElementsByTagName("button")[0];

// inserindo função a ser executada ao botao
// addEventListener -> função responsavel por associar uma ação do usuario a função
// primeiro parametro do addEventListener é uma string ""
// segundo parametro do addEventListener é uma função
btnEntrar.addEventListener("click", () =>{
    if(logado.value === "true"){
        titulo.style.color = "green";
    }else{
        titulo.style.color = "blue";
    }
});




