// para acessar o config volta um nivel
let dbConnection = require('../config/dbConnection');

module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        async function getProfessores() {
            try {
                const pool = await dbConnection(); // executa a funçao
                const results = await pool.request().query('SELECT * from PROFESSORES');

                // res.json(results.recordset);

                res.render('informacao/professores', { profs: results.recordset });
            } catch (err) {
                console.log(err);
            }
        }
        getProfessores();
    });
}