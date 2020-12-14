import { Router } from 'express'
import imageController from './controllers/imageController'
import UserController from './controllers/userController'

const routes = Router()


routes.post('/user', UserController.login)
routes.post('/user/signup', UserController.create)
routes.post('/image/create', imageController.create)
routes.get('/image/:id', imageController.show)
routes.get('/image', imageController.index)

export default routes