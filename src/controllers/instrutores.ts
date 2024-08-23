import {Request, Response} from 'express'

type TInstrutores = {
  id: number
  nome: string
  email: string
}

const instrutores: TInstrutores[] = [
  {
    id: 1,
    nome: 'Luiz',
    email: 'luiz@email.com'
  },
  {
    id: 2,
    nome: 'Maria',
    email: 'maria@email.com'
  }
]

export const listar = (req: Request, res: Response) => {
  return res.status(200).json(instrutores)
}

export const detalhar = (req: Request, res: Response) => {
  const { id } = req.params

  const instrutor = instrutores.find((item) => {
    return item.id === Number(id)
  })

  if (!instrutor) {
    return res.status(404).json({
      mensagem: 'Instrutor não encontrado'
    })
  }

    return res.status(200).json(instrutor)
}