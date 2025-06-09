// demonstração de um modulo carregado
//let mod = require('./modulo1');

let app = require('./app/config/server'); // carregando o módulo do servidor

let rotaHome = require('./app/routes/home'); // define a rota
rotaHome(app); // está executando

let rotaAdicionaUsuario = require('./app/routes/adiciona_usuario');
rotaAdicionaUsuario(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app);

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);
// poderiam ser executados em linha direto...

app.listen(3000, function() {
  console.log("Servidor com express foi carregado!");
  // console.log(mod); // exibe o conteudo do módulo para demonstração
});