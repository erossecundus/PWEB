// acessar os argumentos da linha de comando usando ..(nao deu pra copiar essa caraia)

let soma =0;
// [node] [exercicio3.js] [1] [2] [3] => i = [0, 1, 2, 3, ..], ou seja,
// cada argumento esta em um indice, por isso o i=2 pega o primeiro numero
for (let i=2; i<=process.argv.length-1; i++) {
  soma = soma + Number(process.argv[i]);
}
console.log("soma = "+soma);