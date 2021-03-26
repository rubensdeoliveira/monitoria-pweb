import { Router }  from 'express'
 
import UsersController from './app/controllers/UsersController'
import SessionsController from './app/controllers/SessionsController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UsersController.store)
routes.post('/sessions', SessionsController.store)

routes.use(authMiddleware)

routes.put('/users', UsersController.update)

export default routes