function exibeMensagensNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}
//executando
exibeMensagensNaOrdem("Essa é a primeira mensagem exibida na ordem", function() {
  console.log("Essa é a segunda mensagem exibida na ordem");
});