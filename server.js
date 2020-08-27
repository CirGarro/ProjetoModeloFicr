const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const Usuario = require('./src/models/usuarioModel')
const Lista = require('./src/models/listaModel')
// const Categoria = require('./src/models/categoriasModel')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ProjetoModeloMongoDb', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/listaRoute')

routes(app)

app.route('/').get((req, res) => {
    res.send('acessou API')
})

const port = 3000
app.listen(port)

console.log('Aplicação iniciada na porta: ', port)