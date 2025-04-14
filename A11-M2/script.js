
// MESES DO ANO
// 0 = jan
// 1 = fev
// 2 = mar
//...

// DIAS DA SEMANA
// 0 = domingo
// 1 = segunda
// 2 = terça

// criando objeto Date
const newDate = new Date();

const date = document.getElementById("date");
date.innerText = newDate;
// 04/12/2023

// se for domingo coloque na tela 
// tadinha vai trabalhar amanha...
if(newDate.getDay() === 0){
   let mensagem = document.getElementById("mensagem");
   mensagem.innerText = "amanha é segunda, tadinho(a) vai trabalhar..."
}
// Mon Apr 14 2025 19:19:27 GMT-0300 (Horário Padrão de Brasília)

const message = {
    text: "fala tabs boa noite!",
    sender: "bea",
    receiver: "tabs",
    createdAt: "19:19:27"
}

// contagem regressiva do insta
// tempo limite para editar mensagem no whatsapp
// falta x tempo para promoção acabar 
// tempo de tela acessa
if((newDate.getMinutes() - message.createdAt.getMinutes) < 15){
    console.log("tempo de edição excedido")
}