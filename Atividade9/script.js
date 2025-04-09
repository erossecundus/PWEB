function maior() {
  let seq = [];
  seq[0] = Number(document.getElementById("maior1").value);
  seq[1] = Number(document.getElementById("maior2").value);
  seq[2] = Number(document.getElementById("maior3").value);

  document.getElementById("outputMaior").value = Math.max(...seq);
}

function emOrdem() {
  let seq = [];
  seq[0] = Number(document.getElementById("ordem1").value);
  seq[1] = Number(document.getElementById("ordem2").value);
  seq[2] = Number(document.getElementById("ordem3").value);

  document.getElementById("outputOrdem").value = seq.sort((a, b) => a - b).join(" - ");
}

function palindromo() {
  let pal = document.getElementById("palindromo").value;
  pal = pal.toUpperCase().replace(/[^a-zA-ZÀ-ÿ]/g, '');
  lap = pal.split('').reverse().join('');

  let output;
  if (pal == lap) {
    output = 'É palíndromo!'
  } else {
    output = 'Não é palindromo!'
  }

  document.getElementById("outputPalindromo").value = output;
}

function triangulo() {
  let seq = [];
  seq[0] = Number(document.getElementById("tri1").value);
  seq[1] = Number(document.getElementById("tri2").value);
  seq[2] = Number(document.getElementById("tri3").value);
  seq = seq.sort((a, b) => a - b);

  let output = `{ ${seq.join(", ")} } `;

  if (seq[0] + seq[1] <= seq[2]) {
    output += 'não formam um triângulo!';
  } else {
    if (seq[0] == seq[2]) {
      output += 'é um triângulo equilátero!'
    } else
    if (seq[0] == seq[1] || seq[1] == seq[2]) {
      output += 'é um triângulo isosceles!'
    } else {
      output += 'é um triângulo escaleno!'
    }
  }
  document.getElementById("outputTriangulo").value = output;
}

function refresh() {
  const imagem = document.getElementById("refresh");
  imagem.classList.remove("rotacionar");
  void imagem.offsetWidth;
  imagem.classList.add("rotacionar");

  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  });
}