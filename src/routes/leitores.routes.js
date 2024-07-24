const {Router} = require('express')
const LeitorController = require('../controllers/LeitorController')


const leitoresRoutes = new Router()

leitoresRoutes.get('/', LeitorController.listarTodos)
leitoresRoutes.get('/', LeitorController.listarUm)
leitoresRoutes.post('/', LeitorController.cadastrar)
leitoresRoutes.put('/', LeitorController.atualizar)
leitoresRoutes.delete('/', LeitorController.deletar)


module.exports = leitoresRoutes