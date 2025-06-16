const sql = require('mssql');

module.exports = function() {
    const sqlConfig = {
        user: 'BD2321001', //7 últimos dígitos do seu RA
        password: '', // botar uma senha
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}