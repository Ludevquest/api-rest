import { Router } from 'express'
import { listar } from './controllers/instrutores'

const routes = Router()

// listar todos instrutores
routes.get('/instrutores', listar)

// detalhar as informações de um instrutor
// cadastrar um instrutor
// editar um instrutor
// excluir um instrutor

// cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default routes