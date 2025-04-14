function calcular() {
  let altura = document.getElementById("inputaltura").value;
  let peso = document.getElementById("inputpeso").value;

  let imc = peso/(altura*altura);
  let classificacao;

  switch(true) {
    case imc < 18.5:
      classificacao = 'magreza'; break;
    case imc >= 18.5 && imc < 25:
      classificacao = 'normal'; break;
    case imc >= 25 && imc < 30:
      classificacao = 'sobrepeso'; break;
    case imc >= 30 && imc < 40:
      classificacao = 'obesidade'; break;
    case imc >= 40:
      classificacao = 'obesidade grave'
  }

  document.getElementById("resultado").innerHTML = `
  <div class="resultado">
  <div class="outputRespostas"><span>I.M.C. calculado: </span> <span><strong>${imc.toFixed(2)}</strong></span></div>
  <div class="outputRespostas"><span>Classificação: </span> <span><strong>${classificacao}</strong></span></div>
  </div>`

}