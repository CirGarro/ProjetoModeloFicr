const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
    descricao: {
        type: String,
        required: 'Favor informar a categoria'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    lista: [
        {
            titulo: {
                type: String
            },
            descricao: {
                type: String
            },
            atividades: [
                {
                    descricao: {
                        type: String
                    },
                    dt_prevista: {
                        type: Date,
                    },
                    dt_execucao: {
                        type: Date,
                    }
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Categoria', CategoriaSchema)