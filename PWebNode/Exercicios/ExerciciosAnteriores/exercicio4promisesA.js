// func pra imprimir primeira parte
function Parte1() {
  for(let i=1; i<=10; i++) {
    console.log("Primeira parte: "+i)
  }
}

setTimeout(Parte1, 2000); // atraso

const fs = require('fs').promises; //importa a versao com Promises
// rodando com arquivo errado pra ver o erro
fs.readFile('fil.txt','utf-8') //utf evita necessidade do .toString()
  .then(data => {
    const registros = data.split('\n');
    registros.forEach((registro, index) => {
      console.log("Segunda Parte: "+registro);
    });
  })
  .catch(err => {
    console.error("Erro ao ler o arquivo: ", err); // console.error melhor para erros
  });
  