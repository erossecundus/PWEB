// para acessar o config volta um nivel
// let dbConnection = require('../config/dbConnection'); // foi carregado no server

module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        async function getProfessores() {
            try {
                let connection = app.config.dbConnection; // inclui pq dbConn vem do server

                const pool = await connection(); //dbConnection(); // executa a funçao
                //const results = await pool.request().query('SELECT * from PROFESSORES');

                let professoresModel = app.models.professorModel; //vai recuperar a funcao get
                                
                // executar a função, passar a conexao e callback
                professoresModel.getProfessores(pool, function(error, results) {
                    res.render('informacao/professores', { profs: results.recordset });
                })

                //res.json(results.recordset);
                //res.render('informacao/professores', { profs: results.recordset });
            } catch (err) {
                console.log(err);
            }
        }
        getProfessores();
    });
}