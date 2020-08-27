module.exports = function (app) {
    const categorias = require('../controllers/categoriaController')
    app.route('/categorias')
        .get(categorias.listAll)
        .post(categorias.createOne)
    
    app.route('/categorias/:id')
        .get(categorias.showOne)
        .put(categorias.update)
        .delete(categorias.delete)

}