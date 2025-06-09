// criando varias rotas de requisição
let http = require('http');
let server = http.createServer(function(req,res) {
  let opcao = req.url; // preando a url da requisicao
  if(opcao == '/historia') {
    res.end("<html><body>História da FATEC - SO</body></html>");
  }
  else if(opcao == '/cursos') {
    res.end("<html><body>Cursos 2</body></html>");
  }
  else if(opcao == '/professores') {
    res.end("<html><body>Professores</body></html>");
  }
  else {
    res.end("<html><body>Site da Fatec - SO</body></html>");
  }
});
server.listen(3000);