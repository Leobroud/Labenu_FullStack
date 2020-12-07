import { Router } from 'express'
import UserController from './controllers/userController'

const routes = Router()


routes.post('/user/login', UserController.login)
routes.post('/user/signup', UserController.create)

export default routes