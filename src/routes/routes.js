const {Router} = require('express')
const livrosRoutes = require('./livros.routes')
const leitoresRoutes = require('./leitores.routes')
const instrumentosRoutes = require('./instrumentos.routes')
const auditoriosRoutes = require('./auditorios.routes')
const usuariosRoutes = require('./usuario.routes')
const LoginController = require('../controllers/LoginController')
const auth = require('../middlewares/auth')

const routes = new Router()

routes.get('/', (request, response)=>{response.send('Sea Bienvenido')})

routes.use('/usuario', usuariosRoutes)
routes.post('/login', LoginController.login)

//validação de token aplicada à cada rota:
routes.use('/livros', auth, livrosRoutes)
routes.use('/leitores', auth, leitoresRoutes)
routes.use('/instrumentos', auth, instrumentosRoutes)
routes.use('/auditorios', auth, auditoriosRoutes)
routes.use('/permissoes', )



module.exports = routes