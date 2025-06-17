// separando o serviço da aplicação em módulo a parte

// usando o express
let express = require('express');

// configurando o consign para as rotas
let consign = require('consign');

// carregando modulo do body-parser
let bodyParser = require('body-parser');

let app = express(); //executando o express

app.set('view engine','ejs'); // incluindo o ejs: metodo send vira render

app.set('views','./app/views'); //diretório onde os arquivos estao localizados

app.use(bodyParser.urlencoded({extended: true}));

consign({cwd:'app'}) // inclui a pasta app
    .include('routes')
    .then('config/dbConnection.js') // garante que todo os aqrquivos do routes tenham sido processados
    .then('models')
    .into(app);

module.exports = app;

