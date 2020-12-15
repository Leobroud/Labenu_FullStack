import { Router } from 'express'
import imageController from './controllers/imageController'
import UserController from './controllers/userController'

const routes = Router()


routes.post('/user/login', UserController.login)
routes.post('/user/signup', UserController.create)
routes.post('/image/create', imageController.create)
routes.get('/image/all', imageController.index)
routes.get('/image/:id', imageController.show)

export default routes