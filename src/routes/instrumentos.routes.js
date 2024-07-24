const {Router} = require('express')
const InstrumentoController = require('../controllers/InstrumentoController')

const instrumentosRoutes = new Router()


instrumentosRoutes.get('/:id', InstrumentoController.listarUm)
instrumentosRoutes.get('/', InstrumentoController.listarTodos)
instrumentosRoutes.post('/', InstrumentoController.cadastrar)
instrumentosRoutes.delete('/', InstrumentoController.deletar)
instrumentosRoutes.put('/', InstrumentoController.atualizar)


module.exports = instrumentosRoutes