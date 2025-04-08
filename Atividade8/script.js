let pessoas = [];

function salvar() {


  let idade = parseInt(document.getElementById("inputIdade").value);
  let sexo = document.querySelector('input[name="inputSexo"]:checked').value;
  let opiniao = document.querySelector('input[name="inputOpiniao"]:checked').value;

  let pessoa = {
    "idade" : idade,
    "sexo" : sexo,
    "opiniao" : opiniao
  }
  
  pessoas.push(pessoa);
  console.log(pessoas);

  forms = document.getElementById("formPesquisa");
  forms.reset();
  document.getElementById("inputIdade").value = "";


  listarResultado();
}

function listarResultado(){
  let idades = pessoas.map(pessoa => pessoa.idade);
  let soma = 0;
  let qtdPessimo = 0;
  let pcentoFavoravel = 0;
  let mulheres = 0;
  let homens = 0;
  let outros = 0;

  pessoas.forEach(p => {
    soma += p.idade;
    
    if(p.opiniao == 1) {
      qtdPessimo += 1;
    } else {
      if(p.opiniao == 3 || p.opiniao == 4) {
        pcentoFavoravel += 1;
      }
    }

    switch(p.sexo) {
      case "masculino": homens += 1; break;
      case "feminino": mulheres += 1; break;
      case "outro": outros += 1; break;
    }
  });

  let mediaIdades = soma/ pessoas.length;
  let maisVelha = Math.max(...idades);
  let maisNova = Math.min(...idades);

  pcentoFavoravel = (pcentoFavoravel/ pessoas.length) * 100;

  document.getElementById("resultado").innerHTML = `
  <div class="resultado">
  <div class="outputRespostas"><h2>Resultado Parcial: </h2><span class="badge">(${pessoas.length} respostas)</span></div>
  <div class="outputRespostas"><span>Média de idade:</span> <span><strong>${mediaIdades.toFixed(2)}</strong> anos</span></div>
  <div class="outputRespostas"><span>Pessoa mais velha:</span> <span><strong>${maisVelha}</strong> anos</span></div>
  <div class="outputRespostas"><span>Pessoa mais nova:</span> <span><strong>${maisNova}</strong> anos</span></div>
  <div class="outputRespostas"><span>"Péssimo" (qtd):</span> <strong>${qtdPessimo}</strong></div>
  <div class="outputRespostas"><span>"Ótimo" & "bom":</span> <span><strong>${pcentoFavoravel.toFixed(2)}</strong> %</span></div>
  <div class="outputRespostas"><span>Mulheres (qtd):</span> <strong>${mulheres}</strong></div>
  <div class="outputRespostas"><span>Homens (qtd):</span> <strong>${homens}</strong></div>
  <div class="outputRespostas"><span>Outros (qtd):</span> <strong>${outros}</strong></div>
  </div>`
}