const {Router, request} =require('express')
const AuditorioController = require('../controllers/AuditorioController')

const auditoriosRoutes = new Router()

auditoriosRoutes.get('/', AuditorioController.listarTodos)
auditoriosRoutes.get('/', AuditorioController.listarUm)
auditoriosRoutes.post('/', AuditorioController.cadastrar)
auditoriosRoutes.delete('/', AuditorioController.deletar)
auditoriosRoutes.put('/', AuditorioController.atualizar)

module.exports = auditoriosRoutes