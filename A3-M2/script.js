// REVISÃO INICIAL

// VARIAVEIS -> local onde armazenamos dados/informações
// VARIAVEIS -> STRING(TEXTOS)/NUMBER(NUMEROS)/BOOLEANO(TRUE/FALSE)/FUNCTIONS(FUNÇÕES)
// VARIAVEIS -> LET armazena informações mutaveis ou seja poderão ser alteradas
// VARIAVEIS -> CONST armazena informações constantes ou seja que não sofrerão alterações

// FUNÇÕES -> FUNÇÕES ANONIMAS que são funções que não possuem nome
// FUNÇÕES -> FUNÇÕES ANONIMAS estão atribuidas/associadas a uma variavel CONST 
// FUNÇÕES -> PARAMETROS que é o local onde criamos variaveis locais apenas para representar dados
// passados por quem chamou a função
// FUNÇÕES -> ARGUMENTOS que é o local onde passamos os valores para dentro da chamada da função
// FUNÇÕES -> CALLBACK é uma FUNÇÃO sendo passada como parametro de outrsa função

// arrow function -> simplificação da função anonima
const somar = (valor1,valor2) => {
    return valor1 + valor2
}

const calculadora = (valor1,valor2,operacao) => {
    let result = operacao(valor1, valor2)
    console.log(result)
}

// DOM -> Descrição escrita do documento HTML ou seja descrição de todas as TAGS
// DOM -> SELETORES (getElementById/getElementByTagName/getElementsByClassName)
const titulo = document.getElementById("titulo");
titulo.style.color = "pink";
titulo.innerText = "Mundo alterado";

// 1 -> Criaremos uma estrutura no HTML (div/input/button/ul/h1)
// 2 -> Trazer essa estrutura HTML para o JAVASCRIPT
// 3 -> Faremos alterações nessa estrutura HTML pelo JAVASCRIPT
// 4 -> Devolveremos o HTML atualizado

