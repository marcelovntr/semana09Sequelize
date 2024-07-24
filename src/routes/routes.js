const {Router} = require('express')
const livrosRoutes = require('./livros.routes')
const leitoresRoutes = require('./leitores.routes')
const instrumentosRoutes = require('./instrumentos.routes')
const auditoriosRoutes = require('./auditorios.routes')
const usuariosRoutes = require('./usuario.routes')
const LoginController = require('../controllers/LoginController')

const routes = new Router()

routes.get('/', (request, response)=>{response.send('Sea Bienvenido')})

routes.use('usuarios', usuariosRoutes)
routes.post('/login', LoginController.login)

routes.use('/livros', livrosRoutes)
routes.use('leitores', leitoresRoutes)
routes.use('/instrumentos', instrumentosRoutes)
routes.use('/auditorios', auditoriosRoutes)



module.exports = routes