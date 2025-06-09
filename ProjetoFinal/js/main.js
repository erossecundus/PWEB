// script principal da aplicação

// carrega filmes do localStorage ou mockados
const filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || filmesMockados;

// Carregar e exibir cards
const container = document.getElementById("movie-list");
filmesSalvos.forEach(filme => {
  container.innerHTML += createMovieCard(filme);
});