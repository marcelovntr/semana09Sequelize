const { Router } = require('express')
const PermissaoController = require('../controllers/PermissaoController')


const permissoesRoutes = new Router()

permissoesRoutes.get('/', PermissaoController.listar)
permissoesRoutes.post('/', PermissaoController.criar)
permissoesRoutes.delete('/:id', PermissaoController.deletar)

permissoesRoutes.post('/atribuir', PermissaoController.atribuirPermissao)

module.exports = permissoesRoutes