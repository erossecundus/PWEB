// pega id pela URL se for editar
const params = new URLSearchParams(window.location.search);
const idFilme = params.get("id");

// carrega filmes do localStorage ou mockados
const filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || filmesMockados;

// Se for edição, carrega os dados no formulário
if (idFilme) {
  const filme = filmesMockados.find(f => f.id == idFilme);
  if (filme) {
    document.getElementById("inputTitulo").value = filme.titulo;
    document.getElementById("inputAno").value = filme.ano;
    document.getElementById("inputClassificacao").value = filme.classificacao;
    document.getElementById("inputGenero").value = filme.genero;
    document.getElementById("inputDuracao").value = filme.duracao;
    document.getElementById("inputNota").value = filme.notaUsuario;
    document.getElementById("inputDirecao").value = filme.diretor;
    document.getElementById("inputElenco").value = filme.elenco;
    document.getElementById("inputSinopse").value = filme.sinopse;
    
    const img = document.getElementById("previewImage");
    img.classList.remove("d-none");
    img.src = filme.poster;
    document.getElementById("uploadIcon").classList.add("d-none");
    

    // Habilita botão Alterar / Excluir
    document.getElementById("btnCadastrar").disabled = true;
    document.getElementById("btnAlterar").disabled = false;
    document.getElementById("btnExcluir").disabled = false;
  }
}


function mostrarPreview(event) {
  const input = event.target;
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("previewImage");
      img.src = e.target.result;
      img.classList.remove("d-none");

      // Esconde ícone
      document.getElementById("uploadIcon").classList.add("d-none");
    };
    reader.readAsDataURL(file);
  }
}

