module.exports = function (app) {
    app.get('/admin/formulario_adicionar_usuario', function (req, res) {
        res.render("admin/adicionar_usuario");
    });
}