// separando o serviço da aplicação em módulo a parte

// usando o express
let express = require('express');
let app = express(); //executando o express

app.set('view engine','ejs'); // incluindo o ejs: metodo send vira render

app.set('views','./app/views'); //diretório onde os arquivos estao localizados
module.exports = app;