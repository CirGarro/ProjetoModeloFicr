const mongoose = require('mongoose')
const Categoria = mongoose.model('Categoria')

exports.listAll = (req, res) => {
    Categoria.find({}, (err, categorias) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'lista de categorias',
            data: categorias
        }
        res.send(response)
    })
}

exports.createOne = async (req, res) => {
    const { descricao } = req.body
    let novaCategoria = new Categoria({ descricao })
    novaCategoria.save((error, categoria) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'categoria cadastrado com sucesso',
            data: categoria
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Categoria.findById(req.params.id, (err, categorias) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'listagem efetuada com sucesso!',
            data: categorias
        }
        res.status(201).json(response)
    })
}

exports.update = (req, res) => {
    Categoria.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, categoria) => {
            if (err) {
                res.send(err)
            }
            res.send(categoria)
        })
}

exports.delete = (req, res) => {
    Categoria.remove({ _id: req.params.id }, (err, categoria) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: "categoria Deletada com sucesso!",
            data: categoria
        }
        res.send(response)
    })
}