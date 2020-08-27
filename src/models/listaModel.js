const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const ListaSchema = new Schema({
    titulo: {
        type: String,
        required: 'Favor informar o titulo'
    },
    descricao: {
        type: String,
        required: 'Favor informe a descrição'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    atividades: [
        {
            descricao: {
                type: String,
                required: 'Favor informe a descrição da atividade'
            },
            dt_prevista: {
                type: String,
                default: Date.now
            },
            dt_execucao: {
                type: String,
                default: Date.now
            }
        }
    ]
})

module.exports = mongoose.model('Lista', ListaSchema)