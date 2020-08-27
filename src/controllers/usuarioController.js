const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')

exports.listAll = (req, res) => {
    Usuario.find({}, (err, usuarios) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Lista de usuarios',
            data: usuarios
        }
        res.send(response)
    })
}

exports.createOne = (req, res) => {
    const { nome, telefone, email } = req.body
    let novaUsuario = new Usuario({ nome, telefone, email })
    novaUsuario.save((error, usuario) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'usuário cadastrado com sucesso',
            data: usuario
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Usuario.findById(req.params.id, (err, usuario) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: 'Listagem efetuada com sucesso!',
            data: usuario
        }
        res.status(201).json(response)
    })
}

exports.update = (req, res) => {
    Usuario.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, usuario) => {
            if (err) {
                res.send(err)
            }
            res.send(usuario)
        })
}

exports.delete = (req, res) => {
    Usuario.remove({ _id: req.params.id }, (err, usuario) => {
        if (err) {
            res.send(err)
        }
        let response = {
            message: "usuario Deletada com sucesso!",
            data: usuario
        }
        res.send(response)
    })
}