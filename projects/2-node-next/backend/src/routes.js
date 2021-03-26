import { Router }  from 'express'
 
import UsersController from './app/controllers/UsersController'
import SessionsController from './app/controllers/SessionsController'
import BooksController from './app/controllers/BooksController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UsersController.store)
routes.post('/sessions', SessionsController.store)

routes.use(authMiddleware)

routes.put('/users', UsersController.update)

routes.get('/books', BooksController.index)
routes.get('/books/:id', BooksController.show)
routes.post('/books', BooksController.store)
routes.put('/books/:id', BooksController.update)
routes.delete('/books/:id', BooksController.delete)


export default routes