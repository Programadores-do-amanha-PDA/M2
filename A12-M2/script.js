

// break -> quebrar/romper
// utilizado para INTERROMPER a execução de um looping

const frutas = ["maça", "banana","uva verde(sem caroço)", "kiwi", "pêra"];

for (let i = 0; i < frutas.length; i++) {
    if(frutas[i] === "uva verde(sem caroço)"){
        console.log(frutas[i]);
        break;
    }
    console.log(i);
}

// ESTRUTURA DE CONTROLE
// IF/ELSE -> estrutura de controle CONDICIONAL
// FOR/WHILE -> estrutura de controle de REPETIÇÃO
// SWITCH/CASE -> estrutura de controle de OPÇÕES(limitas)

const inputEscolaridade = document.getElementById("escolaridade");
const btnEscolaridade = document.getElementById("btn-escolaridade");

btnEscolaridade.addEventListener("click", ()=> {
    switch (inputEscolaridade.value) {
        case "Ensino médio":
            console.log("terminou o ensino médio, bora para a facul!")
            break;
        case "Ensino superior incompleto":
            console.log("bora terminar a facul?!");
            break;
        case "Ensino fundamental completo":
            console.log("partiu ensino médio");
            break;
        default:
            console.log("opção nao encontrada")
            break;
    }
});

// escolha um numero de 1 a 4
// para cada numero voce irá ganhar um premio

const inputNumeroSorte = document.getElementById("numero-sorte");
const btnNumeroSorte = document.getElementById("btn-numero-sorte");

btnNumeroSorte.addEventListener("click", ()=> {
    switch (parseInt(inputNumeroSorte.value)) {
        case 1:
            console.log("voce ganhou ar");
            break;
        case 2: 
            console.log("voce ganhou um chuchu");
            break;
        case 3: 
            console.log("ganhou um milhão");
            break;
        case 4: 
            console.log("ganhou a oportunidade de nao ficar rico");
            break;    
        default:
            console.log("digite um numero de 1 a 4")
            break;
    }
})

const inputNumero1= document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const inputOperacao = document.getElementById("operacao");
const btnNumero = document.getElementById("btn-numero");

btnNumero.addEventListener("click", ()=> {
    switch (inputOperacao.value) {
        case "+":
            console.log(parseInt(inputNumero1.value) + parseInt(inputNumero2.value))
            break;
        case "-":
            console.log(parseInt(inputNumero1.value) - parseInt(inputNumero2.value))
            break;
        case "*":
            console.log(parseInt(inputNumero1.value) * parseInt(inputNumero2.value))
            break;
        case "/":
            console.log(parseInt(inputNumero1.value) / parseInt(inputNumero2.value))    
        default:
            console.log("operação invalida")
            break;
    }
})

// nao é um código bonito
// nao é um código limpo
// if(inputEscolaridade.value === "Ensino médio"){
//     console.log("terminou o ensino médio, bora para a facul!");
// }else if(inputEscolaridade.value === "Ensino superior incompleto"){
//     console.log("bora terminar a facul?!");
// }else if(inputEscolaridade.value === "Ensino superior incompleto"){
//     console.log("bora terminar a facul?!");
// }
// else if(inputEscolaridade.value === "Ensino superior incompleto"){
//     console.log("bora terminar a facul?!");
// }
// else if(inputEscolaridade.value === "Ensino superior incompleto"){
//     console.log("bora terminar a facul?!");
// }else if(inputEscolaridade.value === "Ensino superior incompleto"){
//     console.log("bora terminar a facul?!");
// }else{

// }


// REST -> COLOCAR TUDO DENTRO DE UMA CAIXA(ARRAY)
// ... antes do nome de um parametro SIGNIFICA QUE ESTAMOS CRIANDO UM ARRAY
function adicionarBrinquedos(...brinquedos){
    "dama",
    "carrinho"
    // ...brinquedos
    // const brinquedos = ["dama", "carrinhos", "boneca", "jogo da vida"];
   for (let i = 0; i < brinquedos.length; i++) {
            console.log(brinquedos[i])    
   }
   return brinquedos;
}

//                                                ["dama", "carrinhos", "boneca", "jogo da vida"]
const brinquedosAdicionados = adicionarBrinquedos("dama", "carrinhos", "boneca", "jogo da vida");


// olhar e separar os elementos dentro de um array
for (let i = 0; i < brinquedosAdicionados.length; i++) {
    // avaliando cada informação individualmente
    console.log(brinquedos[i])
}


const numeros = [1,2,3,4,5];
// let maior = Math.max(1,2,3,4,5)
let maior = Math.max(...numeros);

const teste = {
    dadosPessoais: {...infos}
}