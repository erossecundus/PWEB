const form = document.forms["formulario"];
form.addEventListener("submit", validar);

function validar(event) {
  let valido = true;

  let nome = document.formulario.elements["inputName"];
  let comentario = document.formulario.elements["inputComent"];

  if (nome.value.length < 10) {
    alert("Nome não pode ter menos que 10 caracteres.");
    valido = false;
  }

  if (!email.validity.valid) {
    alert("Digite um e-mail válido.");
    valido = false;
  }

  if (comentario.value.length < 20) {
    alert("Comentário deve ter no mínimo 20 caracteres.");
    valido = false;
  }

  let pesquisa = document.querySelector('input[name="inputPesquisa"]:checked');

  if (!pesquisa) {
    valido = false;
    alert("Selecione uma opção em Pesquisa.");
  } else {
    if (pesquisa.id === "inputPesquisaSim") {
      alert("Volte sempre à esta página!");
    }
    if (pesquisa.id === "inputPesquisaNao") {
      alert("Que bom que você voltou a visitar esta página!");
    }
  }

  if (!valido) {
    event.preventDefault();
  }
}