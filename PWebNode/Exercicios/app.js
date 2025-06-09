
// demonstração de um modulo carregado
//let mod = require('./modulo1');

let app = require('./app/config/server'); // carregando o módulo do servidor

app.get('/', function(req,res) {
  res.render("home/index");
});

app.get('/admin/formulario_adicionar_usuario', function(req,res) {
  res.render("admin/adicionar_usuario");
});

app.get('/informacao/historia', function(req,res) {
  res.render("informacao/historia");
});
app.get('/informacao/cursos', function(req,res) {
  res.render("informacao/cursos");
});
app.get('/informacao/professores', function(req,res) {
  res.render("informacao/professores");
});

app.listen(3000, function() {
  console.log("Servidor com express foi carregado!");
  // console.log(mod); // exibe o conteudo do módulo para demonstração
});