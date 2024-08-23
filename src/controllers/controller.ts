import {Request, Response} from 'express'

export const teste = (req: Request, res:Response) => {
  return res.send('OK')
}