

const LivroController = require("../controllers/LivroController")

const {Router} = require('express')

const livrosRoutes = new Router()

livrosRoutes.post('/', LivroController.cadastrar)
livrosRoutes.get('/', LivroController.listarTodos)
livrosRoutes.get('/:id', LivroController.listarUm)
livrosRoutes.delete('/', LivroController.deletar)
livrosRoutes.put('/', LivroController.atualizar)


module.exports = livrosRoutes