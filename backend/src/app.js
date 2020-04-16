const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { errors } = require('celebrate')
const app = express()

//app.use(cors({ origin: '' }))
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

///app.listen(3333)

module.exports = app

/**
 * config para quando a aplicação vai para produção
 * limita qual enreço vai poder acessar a aplicação
 *
 * app.use(cors({
 * origin: 'endereço que vai poder acessar a aplicação'
 * }));
 */