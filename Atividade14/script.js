const input = document.getElementById("inputtexto");

document.getElementById("inputradiomaiuscula").addEventListener("change", function () {
  if (this.checked) {
    input.value = input.value.toUpperCase();
  }
});

document.getElementById("inputradiominuscula").addEventListener("change", function () {
  if (this.checked) {
    input.value = input.value.toLowerCase();
  }
});

document.getElementById("inputtexto").addEventListener("input", function () {
  console.log("texto alterado");
  document.querySelectorAll('input[name="inputradio"]').forEach(r => r.checked = false);
});