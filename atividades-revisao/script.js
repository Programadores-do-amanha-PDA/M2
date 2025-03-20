// TIPOS DE VARIAVEIS -> LET / CONST

// LET -> todos as informações alteraveis 
let url = "www.google.com"
url = "www.youtube.com";
url = "www.facebook.com";

// CONST -> todas as informações constantes, que nao podem ser alteradas
const placaCarro = "ews123";

// 1) Você está criando um sistema de pedidos de uma loja. 
// / O nome do cliente / nunca muda após ser registrado.
// CONST -> porque o nome nao pode ser alterado no futuro

// 2) No seu jogo, / a pontuação / do jogador pode mudar ao longo do tempo.
// LET -> a pontuação pode mudar

// 3) Em um sistema bancário, / a taxa de juros / do banco é fixa e nunca muda.
// CONST -> Porque ela é fixa ou seja nao altera

// 4) Em um sistema de reservas de hotel, / o número de noites / que um cliente ficará pode ser alterado antes do pagamento.
//  LET ->  let numeroNoites = 4
// numeroNoites = 2
// numeroNoites = 7

// 5) No cadastro de um usuário, /o CPF / nunca muda.
// CONST -> Cpf unico nao muda

// 6) Em um sistema de controle de estoque, / a quantidade de um produto / pode mudar quando um item é vendido ou reposto.
// LET -> porque a quantidade pode ser alterada

// 7) O nome de uma empresa é definido no cadastro e não pode ser alterado.
// CONST -> porque o cadastro é definitivo nao muda

// 8) Você está programando um relógio digital. / A hora atual / muda constantemente.
// LET -> porque hora pode mudar  

// 9) Em um site de e-commerce, / o valor do frete / depende do endereço do cliente e pode mudar conforme a compra.
// LET -> porque pode variar de acordo com o pedido(endereço)

// 10) Você está desenvolvendo um sistema de envio de e-mails. /O endereço do remetente / é sempre o mesmo.
// CONST -> porque o endereço é sempre o mesmo

// FUNCTIONS (PARAMETRO)

// 1) Crie uma função chamada saudar / que receba um nome como parâmetro / e retorne "Olá, [nome]!".
// RESULTADO ESPERADO: 
// console.log(saudar("Ana")); // "Olá, Ana!"
function saudar(nome){
    //return `Olá, ${nome}!`
    return "Olá, " + nome;
}
console.log(saudar("Beatriz"));

// 2) Crie uma função chamada multiplicar / que receba o parâmetro numero1 e o parâmetro numero2 /  e retorne o produto deles.
// RESULTADO ESPERADO:
// multiplicar(3, 4); // 12
// multiplicar(7, 2); // 14
function multiplicar (numero1, numero2){
    return numero1 * numero2
}
console.log(multiplicar(3,4))
console.log(multiplicar(7,2))

// 3) Crie uma função chamada verificarIdade / que receba um número representando a idade / e retorne "Maior de idade" se for 18 ou mais, senão retorne "Menor de idade".
// RESULTADO ESPERADO:
// verificarIdade(20); // "Maior de idade"
// verificarIdade(15); // "Menor de idade"

function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}
console.log(verificarIdade(20));
console.log(verificarIdade(15));


// FUNCTION ANONIMA

// função normal -> tarefas grandes (pega o nome do usuario, coloca tudo em maiusculo, adiciona no array, busca no array)
// função anonima -> tarefa unica e especifica 
const somar = (n1,n2) => {
    n1 + n2;
}

function calculadora(n1,n2){
    somar();
    n1 - n2;
    n1 * n2;
    n1 / n2;
}

const analisar = (projeto) => {
    return projeto.toUppercase();
}

const darNota = (projeto) => {
    return projeto.length;
}

const enviarNota = (projeto) => {
    projeto.send()
}

function corrigirProjetos(projeto){
    analisar(projeto);
    darNota(projeto);
    enviarNota(projeto);
}

// funçao normal chama e executa as funções anonimas associadas as variaveis
// função corrigirProjetos, chama dentro dela cada tarefa para correção
// chama analisar()
// chama darNota()
// chama enviarNota()


// 1) Crie uma função anônima / que receba dois números / e retorne a soma deles.
// RESULTADO ESPERADO: 
// const resultado = soma(5, 3);
// console.log(resultado); // 8
const soma = (n1,n2) => {
 return n1 + n2
}
// const resultado = soma(5, 3);
// console.log(resultado);

// 2) Crie uma função anônima / que receba um número / e retorne o dobro desse número.
// RESULTADO ESPERADO: 
// const resultado = dobro(7);
// console.log(resultado); // 14
const dobro = (n1) => {
    return n1 + n1;
}
// const resultado = dobro(2);
// console.log(resultado);

// 3) Crie uma função anônima / que receba uma string / e retorne essa string em letras maiúsculas.
// RESULTADO ESPERADO: 
// console.log(maiusculo("hello")); // "HELLO"
const maiusculo = (texto) => {
    return texto.toUpperCase();
}
console.log(maiusculo("Beatriz"));

// 4) Crie uma função anônima que receba uma palavra e retorne a primeira letra dela.
// RESULTADO ESPERADO:
// console.log(primeiraLetra("JavaScript")); // "J"

// 5) Crie uma função anônima que receba um número e retorne "positivo", "negativo" ou "zero".
// RESULTADO ESPERADO:
// console.log(verificarNumero(10)); // "positivo"
// console.log(verificarNumero(-5)); // "negativo"
// console.log(verificarNumero(0)); // "zero"

// 6) Crie uma função anônima que receba uma string e retorne o número de caracteres dela.
// RESULTADO ESPERADO:
// console.log(tamanhoString("JavaScript")); // 10

// 7) Crie uma função anônima que receba duas palavras e as retorne juntas com um espaço entre elas.
// RESULTADO ESPERADO:
// console.log(concatenar("Hello", "World")); // "Hello World"