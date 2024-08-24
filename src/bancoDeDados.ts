type TIdentificador = number

type TAulas = {
  id: number
  nome: string
}

type TInstrutores = {
  id: number
  nome: string
  email: string
  aulas?: TAulas[]
}

type TBancodedados = {
  proximoIdentificador: TIdentificador
  instrutores: TInstrutores[]
}

const bancoDeDados: TBancodedados = {
  proximoIdentificador: 3,
  instrutores: [
    {
      id: 1,
      nome: 'Luiz',
      email: 'luiz@email.com',
      aulas: [
        { id: 1, nome: 'Aula de API REST' }
      ]
    },
    {
      id: 2,
      nome: 'Maria',
      email: 'maria@email.com',
      aulas: []
    }
  ]
}

export default bancoDeDados