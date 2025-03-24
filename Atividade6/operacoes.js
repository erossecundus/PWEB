var n1 = parseFloat(prompt("Entre com o primeiro número:"));
var n2 = parseFloat(prompt("Entre com o segundo número:"));

if(confirm(`Os números escolhidos são: ${n1} e ${n2}?`)) {
  alert(`Soma = ${n1+n2}`+
    `\nSubtração = ${n1-n2}`+
    `\nProduto = ${n1*n2}`+
    `\nDivisão = ${n1/n2}`+
    `\nResto da divisão = ${n1%n2}`);
}