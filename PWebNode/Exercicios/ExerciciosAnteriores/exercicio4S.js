// utiliar o filesystem, ler e imprimir linhas
// incluir modulo: fs da library principal do node.js
// let fs = require('fs'); incorpora outros arquivos
// usar fs.readFileSync)('caminh/arquvo');
// converte com toString() o buffer

const fs = require('fs'); // carregando modulo
const data = fs.readFileSync('file.txt');
// execução bloquead até leitura do arquivo
console.log(data.toString());