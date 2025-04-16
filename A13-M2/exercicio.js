
// Defina se o código a seguir é MODEL/VIEW/CONTROLLER

//1
document.getElementById('idade-pet').innerText = `${novoPet.idade} anos`;
// R: VIEW

//2
const novoPet = new Pet('Rex', 'Cachorro', 3);
// R: CONTROLLER

//3
this.idade += 1;
// R: MODEL

// 4
novoPet.fazerAniversario(); 
// R: CONTROLLER

// 5
const livro = new Livro('JS para Iniciantes', 'Maria Silva', 10);
livro.vender();
// R: CONTROLLER

//6 
document.getElementById('game-nome').innerText = game.nome;
document.getElementById('game-nota').innerText = `Nota: ${game.nota}`;
// R: VIEW

// 7
const containerCupcake = document.getElementById('app');

const cupcakeCard = document.createElement('div');
cupcakeCard.className = 'card';

const saborEl = document.createElement('h2');
saborEl.innerText = cupcake.sabor;

const precoEl = document.createElement('p');
precoEl.innerText = `R$: ${cupcake.preco.toFixed(2)}`;

cupcakeCard.appendChild(saborEl);
cupcakeCard.appendChild(precoEl);
containerCupcake.appendChild(cupcakeCard);
// R: VIEW

// 8
const containerGame = document.getElementById('games');

const gameCard = document.createElement('div');
gameCard.className = 'game-card';

const nome = document.createElement('h2');
nome.innerText = game.nome;

const genero = document.createElement('p');
genero.innerText = `Gênero: ${game.genero}`;

const nota = document.createElement('p');
nota.innerText = `Nota: ${game.nota}`;

gameCard.appendChild(nome);
gameCard.appendChild(genero);
gameCard.appendChild(nota);
containerGame.appendChild(gameCard);
// R: VIEW

// 9
function aplicarDescontoProduto(produto, porcentagem) {
    produto.aplicarDesconto(porcentagem); 
}
// R: CONTROLLER

// 10
function aumentarPrecoProduto(produto, valor) {
    produto.aumentarPreco(valor);
}
// R: CONTROLLER

// 11
function atualizarViewProduto(produto) {
    document.getElementById('nome-produto').innerText = produto.nome;
    document.getElementById('preco-produto').innerText = `R$: ${produto.preco.toFixed(2)}`;
}
// R: VIEW

// 12
document.getElementById('btn-desconto').addEventListener('click', () => {
    aplicarDescontoProduto(produto, 15); 
});
  
document.getElementById('btn-aumentar').addEventListener('click', () => {
    aumentarPrecoProduto(produto, 10); 
});
// R: VIEW