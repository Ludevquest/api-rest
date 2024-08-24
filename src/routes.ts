import { Router } from 'express'
import { atualizar, atualizarEmail, cadastrar, detalhar, excluir, listar } from './controllers/instrutores'

const routes = Router()

// listar todos instrutores
routes.get('/instrutores', listar)

// detalhar as informações de um instrutor
routes.get('/instrutores/:id', detalhar)

// cadastrar um instrutor
routes.post('/instrutores', cadastrar)

// editar um instrutor
routes.put('/instrutores/:id', atualizar)
routes.patch('/instrutores/:id/alterarEmail', atualizarEmail)

// excluir um instrutor
routes.delete('/instrutores/:id', excluir)

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default routes