let http = require('http');
let server = http.createServer(function(req,res) {
  res.end("<html><body>Site da FATEC kkkk</body></html>");
})
server.listen(3000); // vai rodar em localhost:3000 (navegador)