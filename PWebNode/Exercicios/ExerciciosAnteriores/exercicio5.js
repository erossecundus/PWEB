// emissor de eventos

let eventos = require('events'); // atribuição de EventEmitter a uma variavel

let EmissorEventos = eventos.EventEmitter; // variável faz referencia à classe EventEmitter

let ee = new EmissorEventos();
// ou criando direto sem a variavel intermediaria
// let ee = new eventos.EventEmitter();
// mas da forma anterior é uma boa pratica

// É registrado um ouvinte (listener) para o evento 'dados'
// Quando esse evento acontecer executar a função passada como argumento
ee.on('dados', function(fecha) {
  console.log(fecha);
});

// Emissao do evento somente uma vez
ee.emit('dados', 'primeira vez' + Date.now());

// Emissao do evento a cada 500 milissegundos
setInterval(function() {
  ee.emit('dados', Date.now());
}, 500); // ctrl+c pra interromper