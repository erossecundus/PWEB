const prompt = require('prompt-sync')();
// o parentese indica que ja ta executando a função passada
// ela retorna um valor q é nova função a ser usada para criar prompt

function saudacao(nome) {
  console.log('Oi '+nome);
}
function entradaNome(callback) {
  let nome = prompt('Digite seu nome: ');
  callback(nome); // chamando a função callback (saudacao)
}
entradaNome(saudacao);