let escolhaDoComputador;

function jogar(escolhaDoUsuario) {
  // girar a imagem só de farra
  const imagem = document.getElementById("pedra-papel-tesoura");
  imagem.classList.toggle("rotacionar");
  
  setTimeout(() => {
    escolha(escolhaDoUsuario);
  }, 1000);
}

function escolha(escolhaDoUsuario) {
  console.log("user " + escolhaDoUsuario);

  num = (Math.random())*100;
  console.log("num " + num);
  if (num < 33) {
    escolhaDoComputador = "pedra";
  }
  else if (num < 66) {
    escolhaDoComputador = "papel";
  }
  else if (num < 99) {
    escolhaDoComputador = "tesoura";
  }
    
  console.log("pc " + escolhaDoComputador);

  let resultado;
  if (escolhaDoComputador == escolhaDoUsuario) {
    resultado = "Empatou!";
  } else {
    switch(escolhaDoComputador+escolhaDoUsuario) {
      case "pedrapapel":
        resultado = "Papel embrulha Pedra. Você ganhou!";
        break;
      case "papelpedra":
        resultado = "Papel embrulha Pedra. Você perdeu!";
        break;
      
      case "pedratesoura":
        resultado = "Pedra quebra tesoura. Você perdeu!";
        break;
      case "tesourapedra":
        resultado = "Pedra quebra tesoura. Você ganhou!";
        break;

      case "papeltesoura":
        resultado = "Tesoura corta Papel. Você ganhou!";
        break;
      case "tesourapapel":
        resultado = "Tesoura corta Papel. Você perdeu!";
        break;
     
    }
  }

  alert(`Sua escolha: ${escolhaDoUsuario}\nEscolha do computador: ${escolhaDoComputador}
        \n${resultado}`);
  
}