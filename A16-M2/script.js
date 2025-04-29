
// // RESOLUÇÃO DA ATIVIDADE PARA CASA
// const nomeAlunos = ['erick',  'luis', 'nyvea', 'Luana'];
// // const nomeAlunos = ['Erick',  'Luis', 'Nyvea', 'Luana'];""
// const nomesMaiusculos = nomeAlunos.map(aluno => aluno.toUpperCase())
// console.log(nomesMaiusculos)

// // Dada uma lista de palavras, use map para transformar todas em letras maiusculas 
// const frutas = ['banana', 'maçã', 'laranja', 'uva'];
// const frutasMaiusculos = frutas.map(fruta => fruta.toUpperCase())
// console.log(frutasMaiusculos)

// // Dada uma lista de palavras, use map para gerar uma nova lista com o numero de letras de cada palavra
// const animais = ['cachorro', 'gato', 'elefante', 'leao'];
// const quantidadeLetras = animais.map(animal => animal.length)
// console.log(quantidadeLetras)

// Dada uma lista de numeros, use map para transforma-los em multiplos de 3
const numeros = [1,2,3,4,5,6]
const multiplosDeTres = numeros.map((numero) => numero * 3);
console.log(multiplosDeTres);

const filtrandoNumerosDivisiveisPorDois = numeros.filter(numero => (numero % 2) != 0)
console.log(filtrandoNumerosDivisiveisPorDois)

const produtos = [
    {nome: "batata", preco: 3.00},
    {nome: "feijão", preco: 15.00},
    {nome: "salada", preco: 150.00},
]


// QUANDO UTILIZAR REDUCE 
// Quando quiser somar valores dentro de um array
// quando o callback utiliza mais de um parametro colocamos ()
//const acumulandoPreco = produtos.reduce((acumulador,produto) => produto.preco + acumulador);

// os produtos que forem mais de 50 reais terão um desconto de 10%
// calcular o preço total do carinho de compras (os produto que forem mais de 50 reais desconto de 10%)
const acumulandoPreco = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

const acumuladorNumeros = numeros.reduce((acc,numero) => {
    console.log(acc)
    return acc + numero
}, 0)
console.log(acumuladorNumeros);

const teste = numeros.reduce((teste1, teste2)=> {
    console.log(teste1)
    return teste1 + teste2
});