module.exports = function (app) {
    const listas = require('../controllers/listaController')
    app.route('/listas')
        .get(listas.listAll)
        .post(listas.createOne)
    
    app.route('/listas/:id')
        .get(listas.showOne)
        .put(listas.update)
        .delete(listas.delete)

}