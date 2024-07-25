

const LivroController = require("../controllers/LivroController")
const gateKeeper = require('../middlewares/gateKeeper')

const {Router} = require('express')

const livrosRoutes = new Router()

livrosRoutes.post('/', gateKeeper(['cadastrarLivro']),LivroController.cadastrar)
livrosRoutes.get('/', gateKeeper(['listarLivros']), LivroController.listarTodos)
livrosRoutes.get('/:id', LivroController.listarUm)
livrosRoutes.delete('/:id', gateKeeper(['apagarLivro']), LivroController.deletar)
livrosRoutes.put('/', LivroController.atualizar)


module.exports = livrosRoutes