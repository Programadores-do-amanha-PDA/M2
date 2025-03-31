// porque utilizar POO(Programação Orientada a Objetos)
// cria um código reutilizavel
// cria um código organizado
// cria um código de facil manutenção

// ERRADO
// const pessoa = {
//     cpf: "123.123.123-88",
//     nome: "Beatriz",
//     idade: 24
// } 

// const pessoa1 = {
//     cpf: "123.123.123-88",
//     nome: "Beatriz",
//     idade: 24
// } 

// ESTRUTURA RESPONSAVEL POR CRIAR UM NOVO OBJETO
// CLASS
// CLASSES SÃO CRIADAS COM PRIMEIRA LETRA MAIUSCULA

// criando classe Pessoa
class Pessoa{
    // construtor é a método(função) responsavel por pegar os parametros
    // para criar um novo objeto 
    // (atributos/caracteristicas)
   constructor(cpf,nome,idade, corCabelo){
        // this. variavel dentro da classe
        // const cpf = cpf; linha debaixo equivalente a este código
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
        this.corCabelo = corCabelo;
   }

   // NAO CRIAMOS FUNÇÕES DENTRO DE CLASSES 
   // CRIAMOS MÉTODOS

   // PORQUE UTILIZAR MÉTODOS
   // para alterar os valores de um objeto pela classe

   // métodos -> funções
   andar(quantidadePassos) {
     console.log("andou " + quantidadePassos + " passos");
   }

   fezAniversario(){
     this.idade = this.idade + 1;
   }
} 

// instanciar uma classe -> criar um objeto daquela classe
const usuario = new Pessoa("123.123.123-88","Beatriz",24);
const usuario2 = new Pessoa("123.123.123-99", "Tabata", 25);
const usuario3 = new Pessoa("123.123.123-22", "Davi", 18);

// function createUser(){
//    const nomeUser = prompt("digite seu nome");
//    const cpfUser = prompt("digite seu cpf");
//    const idadeUser = Number(prompt("digite seu idade"));
//    const corCabeloUser = prompt("digite a cor do seu cabelo");

//    const newUser = new Pessoa(cpfUser, nomeUser,idadeUser, corCabeloUser)
//    console.log(newUser)
// }

// createUser()

let listaUsuarios = []
listaUsuarios.push(usuario,usuario2, usuario3);

// usuario.idade = 28
usuario.fezAniversario();
console.log(usuario);

// {
//     img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQx8nuNGRMYu2Lb4d5XBec7eBf6s70Fu1osezyE6P9-5POryWhvZ-SCAE8YqvLDojmAvSUH81sn4jl2wiObmzQMlUHnOWgrPrSxvz2uSCkEZSk009CdjrTf-qPO1a7GCOUiRQ-Gvg&usqp=CAc",
//     otherImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0an8A5frUXAZChz66Iioqf2Rm2TKNlDKbSYfLGcBN6r8CBdG4AVcKFUVPqbddDp9JpStuQw2idB-zd_4Hb8iryWl7dJcsTvrZMUEEJJ1XUhzYVvxi3bNAV6b7zKFgmdvzTY2E1-W1WXs&usqp=CAc',
//     title: "Smartphone XYZ",
//     description: "Smartphone com câmera de 108MP e bateria de longa duração.",
//     price: 1999.99,
//     oldPrice: 2499.99,
//     status: "success",
//   },
// class Produto{
//     constructor(img,otherImg,title, description, price, oldPrice, status ){

//     }
// }

// um sistema para loja de carro 
// quais objetos preciso para uma loja funcionar
// (carros)
// (funcionarios)
// (loja/local)
// (email)
// (cliente)

// EXEMPLO
class Carro{
 constructor(nome, marca, combustivel, modelo, preco){
    this.nome = nome;
    this.marca = marca;
    this.combustivel = combustivel;
    this.modelo = modelo;
    this.preco = preco;
 }
}

// EXEMPLO
class Estudante {
    constructor(/**atributos */){
        /** variaveis -> this.atributo */
    }
}

// criando um objeto Carro -> instanciando um objeto Carro
const meriva = new Carro("Meriva", "ford", "flex", "retch", 12000);
const celta = new Carro("Celta", "ford", "gasolina", "sedan", 2000);

class Funcionario{
    //             atributos -> caracteristicas
    constructor(cargo,salario,chefe,nome, setor){}
}

class Loja{

}

class Email{

}

class Cliente{

}
