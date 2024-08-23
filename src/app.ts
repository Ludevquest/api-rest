import 'dotenv/config'
import express from "express"
import { teste } from './controllers/controller'
import routes from './routes'

const app = express()

app.use(routes)

app.listen(process.env.PORT)