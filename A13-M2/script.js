
// // REST -> AGRUPA OS ARGUMENTOS EM UM ARRAY
// function adicionarLivros(...livros){
//     console.log(livros);
//     // const livros = []
// }

// // SPREAD -> ESPALHA OS ELEMENTOS DE UM ARRAY OU OBJETO
// const numeros = [2,3];

// // com spread
// const maisNumeros = [1,...numeros];
// console.log("com spread ",maisNumeros);
// // [1,2,3]

// // sem spread
// const maisNumeros1 = [1,numeros];
// console.log("sem spread ", maisNumeros1)
// // [1,[2,3]]

// const pessoa = {nome: "Beatriz", cpf: "123.456.789-33"};

// const novaPessoa = {...pessoa, idade: 24};
// //     sem spread  {{nome: "Beatriz", cpf: "123.456.789-33"},idade: 24}
// //                                0                              1

// //    com spread   {nome: "Beatriz", cpf: "123.456.789-33",idade: 24}
// //                      0                 1                   2

// const nomes = ["Beatriz", "Joao", "Eduarda"]
// const carrinho = ["notebook", "fone sony"];

// const novoCarrinho = ["teclado", ...carrinho, ...nomes];
// console.log(novoCarrinho);


// // MVC -> Model / View / Controller

// // Model -> Modelo
// // MODELO DE OBJETO -> VULGO CLASS
// class Product{
//     constructor(image, name, price){
//         this.image = image;
//         this.name = name;
//         this.price = price;
//     }

//     discount(){
//         this.price = this.price - (this.price * 0.10);
//     }

//     changeName(newName){
//         this.name = newName;
//     }
// }

// // View -> Tudo que o usuario vê
// // const titleProduct = document.getElementById("name-product");
// // titleProduct.innerText = "Batata";

// // Controller -> Controlador irá controlar o OBJETO
// // criando um novo objeto
// // editando algum valor dentro do objeto
// const newProduct = new Product("./abacaxi.png", "abacaxi", 50);
// newProduct.discount();
// newProduct.changeName("abacaxi coroa");


// Model - class
// View - document.
// controller - nomeObjeto.metodo() ou new NomeClasse()


// -------------------------------------------------------
// MODEL - CONTROLLER - VIEW

// Model
class Produto{
    constructor(nome, preco){
        this.image = "./abacaxi.png";
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(porcentagem){
        this.preco = this.preco - (this.preco * (porcentagem/100));
    }

    aumentarPreco(valor){
        this.preco = this.preco + valor;
    }

    alterarNome(novoNome){
        this.nome = novoNome;
    }
}

// Controller
const camisa = new Produto("camiseta de abacaxi",50);

//                              objeto que criamos no controller
function aplicarDescontoProduto(produto, desconto){
     produto.aplicarDesconto(desconto);
}

function aumentarPrecoProduto(produto, valor){
    produto.aumentarPreco(valor);
}

function mudarNomeProduto(produto, nome){
    produto.alterarNome(nome);
}

// VIEW
function atualizarViewProduto(produto){
    document.getElementById('span-name-product').innerText = produto.nome;
    document.getElementById('span-price-product').innerText = `R$: ${produto.preco},00`;
    document.getElementById("img-product").src = produto.image;
}

atualizarViewProduto(camisa);

const btnDesconto = document.getElementById("btn-aplicar-desconto");
const btnAumentarPreco = document.getElementById("btn-aumentar-valor");

btnDesconto.addEventListener("click", ()=> {
    aplicarDescontoProduto(camisa, 10);
    atualizarViewProduto(camisa);
});

btnAumentarPreco.addEventListener("click", ()=> {
    aumentarPrecoProduto(camisa,40);
    atualizarViewProduto(camisa);
});


// Criar um MVC de uma Pessoa (nome)

