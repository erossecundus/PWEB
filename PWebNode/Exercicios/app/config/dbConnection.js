const sql = require('mssql');

//module.exports = function() {     // vai mudar a forma de exportar
let connSQLServer = function() {
    const sqlConfig = {
        user: 'BD2321001', //7 últimos dígitos do seu RA
        password: '&scADS987',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}

// exportando a função e quando chamar a pagina ele conecta
module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
}