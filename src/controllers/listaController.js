const mongoose = require('mongoose')
const Lista = mongoose.model('Lista')

exports.listAll = (req, res) => {
    Lista.find({}, (err, listas) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Lista de listas',
            data: listas
        }
        res.send(response)
    })
}

exports.createOne = async (req, res) => {
    const { titulo, descricao, atividades } = req.body
    let novaLista = await new Lista({ titulo, descricao, atividades })
    novaLista.save((error, lista) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'lista cadastrado com sucesso',
            data: lista
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Lista.findById(req.params.id, (err, lista) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Listagem efetuada com sucesso!',
            data: lista
        }
        res.status(201).json(response)
    })
}

exports.update = (req, res) => {
    Lista.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, lista) => {
            if (err) {
                res.send(err)
            }
            res.send(lista)
        })
}

exports.delete = (req, res) => {
    Lista.remove({ _id: req.params.id }, (err, lista) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: "lista Deletada com sucesso!",
            data: lista
        }
        res.send(response)
    })
}