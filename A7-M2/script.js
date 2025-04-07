
// fetch -> uma FUNÇÃO NATIVA do javascript, que apenas faz requisições para APIs
// async(assincrono)/ await(aguardar) -> 
// Promise(promessa) -> representa a PROMESSA de uma resposta, sendo ela positiva ou negativa
// Promise {<pending>} -> esta faltando AWAIT 

// esta função tem um código ASSINCRONO (resposta não é imediata)
// async function buscarInfoPokemon(){
//     // await -> aguarde a requisição ser concluida
//     const resultadoBuscaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     // json -> tipo de dado
//     // .json() -> descriptografia das informações para podermos acessar
//     const pokemon = await resultadoBuscaPokemon.json();
//     // mostrando todos os dados do meu pokemon

//     // let ditto = {
//     //      forms: [
//     //         {name: ""},
//     //         {age: 23},
//     //         {date: "13/04/2020"}
//     //      ]
//     // }

//     const nomePokemon = document.getElementById("nome-pokemon");
//     nomePokemon.innerText = pokemon.name;

//     const imgPokemon = document.getElementById("img-pokemon");
//     imgPokemon.src = pokemon.sprites.front_default;
//     console.log(pokemon);
// }

async function buscarInfoPokemon(){
    const resultadoBuscaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = resultadoBuscaPokemon.json();
    console.log(data);
}

// passo 1 -> criar função
// function buscar(){

// }

// passo 2 -> criar uma constante que receba o resultado da requisição para API
// function buscar2(){
//     const resultadoBuscaApi = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// }

// passo 3 -> adicionar async await
// async function buscar2(){
//     const resultadoBuscaApi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// }

// passo 4 -> aguardar(await) a descriptografia do .json()
// async function buscar2(){
//     const resultadoBuscaApi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const pokemon = await resultadoBuscaApi.json();
// }

// passo 5 -> trocar as informações do html pelas recebidas da API
// async function buscar2(){
//     const resultadoBuscaApi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const pokemon = await resultadoBuscaApi.json();

//     const nomePokemon = document.getElementById("nome-pokemon");
//     nomePokemon.innerText = pokemon.name;

//     const imgPokemon = document.getElementById("img-pokemon");
//     imgPokemon.src = pokemon.sprites.front_default;
// }

async function buscar2(){
    const resultadoBuscaApi = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    const pokemon = await resultadoBuscaApi.json();

    const nomePokemon = document.getElementById("nome-pokemon");
    nomePokemon.innerText = pokemon.name;

    const imgPokemon = document.getElementById("img-pokemon");
    imgPokemon.src = pokemon.sprites.front_default;

    imgPokemon.style.height = "350px";
    imgPokemon.style.width = "350px";
}

buscar2()
// getInfoPokemon();

// criar uma função que faça uma requisição para a api de pokemon 
// essa função deve receber as informações do pokemon e alterar 
// o html 
// OBS: quero ver todas as imagens do pokemon e o nome dele 