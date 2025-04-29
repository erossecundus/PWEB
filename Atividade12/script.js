function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  this.calcularArea = function () {
    return this.base * this.altura;
  }
}

function area() {
  let altura = document.getElementById("inputaltura").value;
  let largura = document.getElementById("inputlargura").value;

  const retangulo = new Retangulo(altura, largura).calcularArea();

  exibirResultado(
    `<div class="outputRespostas"><span>Área do retângulo: </span> <span><strong>${retangulo.toFixed(2)}</strong></span></div>`);
}

class Conta {
  constructor() {
    this.nomeCorrentista;
    this.banco;
    this.numeroConta;
    this.saldo;
  }
  getNomeCorrentista() {
    return this.nomeCorrentista;
  }
  setNomeCorrentista(value) {
    this.nomeCorrentista = value;
  }
  getBanco() {
    return this.banco;
  }
  setBanco(value) {
    this.banco = value;
  }
  getNumeroConta() {
    return this.numeroConta;
  }
  setNumeroConta(value) {
    this.numeroConta = value;
  }
  getSaldo() {
    return this.saldo;
  }
  setSaldo(value) {
    this.saldo = value;
  }
}

class ContaCorrente extends Conta {
  constructor() {
    super();
    this.saldoEspecial;
  }
  getSaldoEspecial() {
    return this.saldoEspecial;
  }
  setSaldoEspecial(value) {
    this.saldoEspecial = value;
  }
}

class ContaPoupanca extends Conta {
  constructor() {
    super();
    this.juros;
    this.dataVencimento;
  }
  getJuros() {
    return this.juros;
  }
  setJuros(value) {
    this.juros = value;
  }
  getDataVencimento() {
    return this.dataVencimento;
  }
  setDataVencimento(value) {
    this.dataVencimento = value
  }
}

function criarContaC() {
  const cc = new ContaCorrente();
  cc.setNomeCorrentista(document.getElementById("inputnomeCC").value);
  cc.setBanco(document.getElementById("inputbancoCC").value);
  cc.setNumeroConta(document.getElementById("inputnumcontaCC").value);
  cc.setSaldo(document.getElementById("inputsaldoCC").value);
  cc.setSaldoEspecial(document.getElementById("inputsaldoespecialCC").value);

  let resultado = "";
  for (let chave in cc) {
    let chaveFormatada = formatarChave(chave);
    resultado += `<div class="outputRespostas"><span>${chaveFormatada}: </span> <span><strong>${cc[chave]}</strong></span></div>`;
  }
  exibirResultado(resultado);
}

function criarContaP() {
  const cp = new ContaPoupanca();
  cp.setNomeCorrentista(document.getElementById("inputnomeCP").value);
  cp.setBanco(document.getElementById("inputbancoCP").value);
  cp.setNumeroConta(document.getElementById("inputnumcontaCP").value);
  cp.setSaldo(document.getElementById("inputsaldoCP").value);
  cp.setJuros(document.getElementById("inputjurosCP").value);
  cp.setDataVencimento(document.getElementById("inputvencimentoCP").value);

  let resultado = "";
  for (let chave in cp) {
    let chaveFormatada = formatarChave(chave);
    resultado += `<div class="outputRespostas"><span>${chaveFormatada}: </span> <span><strong>${cp[chave]}</strong></span></div>`;
  }
  exibirResultado(resultado);
}

function exibirResultado(resultado) {
  document.getElementById("resultado").innerHTML = `
  <div class="resultado">${resultado}</div>`
}

function formatarChave(texto) {
  return texto.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}