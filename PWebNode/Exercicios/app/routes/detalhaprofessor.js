// copiando e alterando de professores.js

module.exports = function (app) {
    app.get('/informacao/professores/detalhaprofessor', function (req, res) {
        async function getProfessoresID() {
            try {
                let connection = app.config.dbConnection;

                const pool = await connection(); // executa a conexão
                //const results = await pool.request().query('SELECT * FROM professores WHERE id_professor = 1');

                let professoresModel = app.models.professorModel; //vai recuperar a funcao get

                // executar a função, passar a conexao e callback
                professoresModel.getProfessor(pool, function(error, results) {
                    console.log('Resultado da consulta:', results);
                    res.render('informacao/professores/detalhaprofessor', { profs: results.recordset });
                    
                })
                
            } catch (err) {
                console.log(err);
            }
        }
        getProfessoresID();
    });
}