function abrirjanela() {
  if(!quebrada) {
    document.getElementById("janela").src = "janelaaberta.png";
    document.getElementById("statusjanela").textContent = 'Janela Aberta';
  }

}

function fecharjanela() {
  if(!quebrada) {
    document.getElementById("janela").src = "janelafechada.png";
    document.getElementById("statusjanela").textContent = 'Janela Fechada';
  }
}

function quebrarjanela() {
  quebrada = true;
  document.getElementById("janela").src = "janelaquebrada.png";
  document.getElementById("statusjanela").textContent = 'Janela Quebrada';
  document.getElementById("restaurar").disabled = false;
}

function restaurarjanela() {
  quebrada = false;
  fecharjanela();
  document.getElementById("restaurar").disabled = true;
}

let quebrada = false;
let janela = document.getElementById("janela");
let btn = document.getElementById("restaurar")

janela.addEventListener("mouseenter", abrirjanela);
janela.addEventListener("mouseleave", fecharjanela);
janela.addEventListener("click", quebrarjanela);

btn.addEventListener("click", restaurarjanela);