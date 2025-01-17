import { Router } from 'express'
import { atualizar, atualizarEmail, cadastrar, detalhar, excluir, excluirAula, listar } from './controllers/instrutores'
import { cadastrarAula } from './controllers/aulas'

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
routes.post('/instrutores/:id/aulas', cadastrarAula)

// excluir uma aula para um instrutor
routes.delete('/instrutores/:id/aulas/:idAula', excluirAula)

export default routes