import {Request, Response} from 'express'
import bancodedados from '../bancoDeDados'

export const listar = (req: Request, res: Response) => {
  return res.status(200).json(bancodedados.instrutores)
}

export const detalhar = (req: Request, res: Response) => {
  const { id } = req.params

  const instrutor = bancodedados.instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

    return res.status(200).json(instrutor)
}

export const cadastrar = (req: Request, res: Response) => {
  const { nome, email } = req.body // corpo da requisição

  const novoInstrutor = {
    id: bancodedados.proximoIdentificador++,
    nome,
    email
}

  bancodedados.instrutores.push(novoInstrutor)

  return res.status(201).json(novoInstrutor)
}

export const atualizar = (req: Request, res: Response) => {
  const { id } = req.params

  const {nome, email} = req.body

  const instrutor = bancodedados.instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

  instrutor.nome = nome
  instrutor.email =  email

    return res.status(204).send()
}

export const atualizarEmail = (req: Request, res: Response) => {
  const { id } = req.params

  const { email } = req.body

  const instrutor = bancodedados.instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

  instrutor.email =  email

    return res.status(204).send()
}

export const excluir = (req: Request, res: Response) => {
  const { id } = req.params


  const instrutorIndice = bancodedados.instrutores.findIndex((item) => {
    return item.id === Number(id)
  })

  if (instrutorIndice === -1) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

  bancodedados.instrutores.splice(instrutorIndice, 1)

    return res.status(204).send()
}

export const excluirAula = (req: Request, res: Response) => {
  const { id, idAula } = req.params

  const instrutor = bancodedados.instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

  if (!instrutor.aulas) {
    return res.status(404).json({
      mensagem: 'Aula não encontrada para o instrutor informado'
    })
  }

  const aulaIndex = instrutor.aulas?.findIndex((item) => {
    return item.id === Number(idAula)
  })

  if (aulaIndex === -1) {
    return res.status(404).json({
      mensagem: 'Aula não encontrada para o instrutor informado'
    })
  }

  instrutor.aulas.splice(aulaIndex, 1)

  return res.status(204).send()
}