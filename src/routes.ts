import { Router } from 'express'
import { teste } from './controllers/controller'

const routes = Router()

routes.get('/', teste)

export default routes