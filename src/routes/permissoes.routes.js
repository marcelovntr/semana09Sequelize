const { Router } = require('express')

const permissoesRoutes = new Router()

permissoesRoutes.get('/',)
permissoesRoutes.post('/',)
permissoesRoutes.delete('/:id',)

permissoesRoutes.post('/atribuir',)

module.exports = permissoesRoutes