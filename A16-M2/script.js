
// RESOLUÇÃO DA ATIVIDADE PARA CASA
const nomeAlunos = ['erick',  'luis', 'nyvea', 'Luana'];
// const nomeAlunos = ['Erick',  'Luis', 'Nyvea', 'Luana'];""
const nomesMaiusculos = nomeAlunos.map(aluno => aluno.toUpperCase())
console.log(nomesMaiusculos)

// Dada uma lista de palavras, use map para transformar todas em letras maiusculas 
const frutas = ['banana', 'maçã', 'laranja', 'uva'];
const frutasMaiusculos = frutas.map(fruta => fruta.toUpperCase())
console.log(frutasMaiusculos)

// Dada uma lista de palavras, use map para gerar uma nova lista com o numero de letras de cada palavra
const animais = ['cachorro', 'gato', 'elefante', 'leao'];
const quantidadeLetras = animais.map(animal => animal.length)
console.log(quantidadeLetras)

// Dada uma lista de numeros, use map para transforma-los em multiplos de 3
const numeros = [1,2,3,4,5,6]
const multiplosDeTres = numeros.map(numero => numero * 3);
console.log(multiplosDeTres);



