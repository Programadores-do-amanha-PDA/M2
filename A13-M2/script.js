
// REST -> AGRUPA OS ARGUMENTOS EM UM ARRAY
function adicionarLivros(...livros){
    console.log(livros);
    // const livros = []
}

// SPREAD -> ESPALHA OS ELEMENTOS DE UM ARRAY OU OBJETO
const numeros = [2,3];

// com spread
const maisNumeros = [1,...numeros];
console.log("com spread ",maisNumeros);
// [1,2,3]

// sem spread
const maisNumeros1 = [1,numeros];
console.log("sem spread ", maisNumeros1)
// [1,[2,3]]

const pessoa = {nome: "Beatriz", cpf: "123.456.789-33"};

const novaPessoa = {...pessoa, idade: 24};
//     sem spread  {{nome: "Beatriz", cpf: "123.456.789-33"},idade: 24}
//                                0                              1

//    com spread   {nome: "Beatriz", cpf: "123.456.789-33",idade: 24}
//                      0                 1                   2

const nomes = ["Beatriz", "Joao", "Eduarda"]
const carrinho = ["notebook", "fone sony"];

const novoCarrinho = ["teclado", ...carrinho, ...nomes];
console.log(novoCarrinho);