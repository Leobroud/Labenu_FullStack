import { Request, Response } from 'express'
import knex from '../database/connection'
import { generateId, getTokenData } from '../services/allServices'
import { AuthenticationData, Image } from '../types/allTypes'

class imageController {

  static async index(req: Request, res: Response) {

    try { 

      const image = await knex('IMAGES').select('*')
      
      return res.status(200).json(image)

    }catch(error) {
      
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })

    }
  }

  static async create(req: Request, res: Response) {

    try {
      let message = "Success!"

      const { subtitle, author, date, file, tags, collection } = req.body

      const token: string = req.headers.authorization as string

      const tokenData: AuthenticationData = getTokenData(token)

      const id: string = generateId()

      await knex('IMAGES')
        .insert({
          id,
          subtitle,
          author,
          date,
          file,
          tags,
          collection,
          user_id: tokenData.id
        })

      res.status(201).send({ message, id })

    } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })

    }
  }

  static async show(req: Request, res: Response) {

    try {
      let message = "Success!"

      const { id } = req.params

      const queryResult: any = await knex('IMAGES')
        .select("*")
        .where({ id })

      if (!queryResult[0]) {
        res.statusCode = 404
        message = "Image not found"
        throw new Error(message)
      }

      const image: Image = {
        id: queryResult[0].id,
        subtitle: queryResult[0].subtitle,
        author: queryResult[0].author,
        date: queryResult[0].date,
        file: queryResult[0].file,
        tags: queryResult[0].tags,
        collection: queryResult[0].collection,
        userId: queryResult[0].user_id,
      }

      res.status(200).send({ message, image })

    } catch (error) {

      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
    }
  }
}

export default imageController