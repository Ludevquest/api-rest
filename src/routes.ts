import { Router } from 'express'
import { detalhar, listar } from './controllers/instrutores'

const routes = Router()

// listar todos instrutores
routes.get('/instrutores', listar)

// detalhar as informações de um instrutor
routes.get('/instrutores/:id', detalhar)

// cadastrar um instrutor
// editar um instrutor
// excluir um instrutor

// cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default routes