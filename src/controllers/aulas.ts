import {Request, Response} from 'express'
import bancodedados from '../bancoDeDados'

export const cadastrarAula = (req: Request, res: Response) => {
  const { id } = req.params
  const { nome } = req.body
  
  const instrutor = bancodedados.instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

  const novaAula = {
    id: bancodedados.proximoIdentificadorAula++,
    nome
  }

  if (instrutor.aulas) {
    instrutor.aulas.push(novaAula)
    return res.status(201).json(novaAula)
  }

  instrutor.aulas = [novaAula]
  return res.status(201).json(novaAula)
}