// class é um modelo de OBJETO
class Pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

// criar um novo objeto
const novaPessoa = new Pessoa("Beatriz", 24, "123.456.789-99");
//{
//   nome: "Beatriz",
//   idade: 24,
//   cpf: "123.456.789-99"
//}

// Porque utilizar JSON?
// linguagem universal (todas as linguagens podem se comunicar através dele)
// compactação das informações para nao serem corrompidas

// JSON -> 
//'{
//   "nome": "Beatriz",
//   "idade": 24,
//   "cpf": "123.456.789-99"
//}'

// recurso .json() transforma um JSON em um Objeto Javascript
async function buscar(){
    const resultado = await fetch("https://viacep.com.br/ws/01001000/json");
// resultado = {
//   "cep": "01001-000",
//   "logradouro": "Praça da Sé",
//   "complemento": "lado ímpar",
//   "unidade": "",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
//   "estado": "São Paulo",
//   "regiao": "Sudeste",
//   "ibge": "3550308",
//   "gia": "1004",
//   "ddd": "11",
//   "siafi": "7107"
// }
//  .json vai TRANSFORMAR essa informação compactada em um Objeto javascript
    const endereco = await resultado.json();
// endereco = {cep: '01001-000', 
// logradouro: 'Praça da Sé', 
// complemento: 'lado ímpar', 
// unidade: '', bairro: 'Sé',
// …}

    console.log("JSON ABAIXO");
    console.log(resultado);
    console.log("Objeto ABAIXO");
    console.log(endereco);
}
// buscar();

// Podemos transformar um JSON em Objeto Javascript .json() ou JSON.parse(parametrojson)
// Podemos transformar um Objeto Javascript em JSON JSON.stringfy(parametroObjeto)

async function buscarRick(){
     const resultado = await fetch("https://rickandmortyapi.com/api/character/165");
     const personagem = await resultado.json();

     const img = document.createElement("img");
     img.src = personagem.image;
     document.body.appendChild(img);

     console.log(personagem.image)
}
buscarRick()