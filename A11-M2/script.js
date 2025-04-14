
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
// date.innerText = newDate;
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


// Biblioteca -> lugar onde tem varios livros armazenados

// Biblioteca na Programação -> representa um livro com varios recursos

// Biblioteca CALCULAR2.0 -> somar, subtrair, multiplicar e dividir

function novaData(){
    return moment().format('DD [de] MMMM [de] YYYY as HH:mm');
}

// função diff trabalha com intervalos entre datas
// ou calcula a diferença entre datas
function quantosAnos(){
    const hoje = moment();
    //                         ano-dia-mes
    const nascimento = moment('2000-04-05')
    const idade = hoje.diff(nascimento,'hours');
    return idade;
}

// DD/MM/YYYY
date.innerText = novaData();

// function novaData() {
//     const hoje = new Date();
//     let dia = hoje.getDate();
//     let mes = hoje.getMonth() + 1; // Janeiro é 0
//     const ano = hoje.getFullYear();

//     if (dia < 10) dia = '0' + dia;
//     if (mes < 10) mes = '0' + mes;

//     return dia + '/' + mes + '/' + ano;
//   }
//   console.log(novaData());

  document.getElementById('data').innerText = novaData();


  // pensem na black friday e calculem quantos meses faltam para a black friday 
  // utilizando o momento 
  // "faltam x meses para black friday"