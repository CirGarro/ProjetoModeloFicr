const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: 'Favor informar o nome do usuário'
    },
    telefone: {
        type: String,
        required: 'Favor informe qual é o telefone'
    },
    email: {
        type: String,
        required: 'favor informe o E-mail!'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)