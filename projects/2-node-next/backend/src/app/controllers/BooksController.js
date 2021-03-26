import * as Yup from 'yup'
import Book from '../models/Book'

import User from '../models/User'

class BooksController {
  async index(req, res) {
    const { page = 1 } = req.query

    const books = await Book.findAll({
      attributes: ['id', 'title', 'pages'],
      include: [
        { model: User, as: 'owner', attributes: ['name'] },
      ],
      order: ['title'],
      limit: 20,
      offset: (page - 1) * 20,
    })

    return res.json(books)
  }

  async show(req, res) {
    const book = await Book.findByPk(req.params.id, {
      attributes: ['id', 'title', 'pages'],
      include: [
        { model: User, as: 'owner', attributes: ['name'] },
      ],
    })

    if (!book) {
      return res.status(400).json({ error: 'Livro não encontrado!' })
    }

    return res.json(book)
  }

  async store (req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      pages: Yup.number().required()
    })

    const schemaIsValid = await schema.isValid(req.body)

    if(!schemaIsValid){
      return res.status(400).json({ error: 'Erro de validação' })
    }

    const owner_id = req.userId
    const owner = await User.findByPk(owner_id)

    if (!owner) {
      return res.status(400).json({ error: 'Usuário não encontrado' })
    }

    const { id, title, pages } = await Book.create({...req.body, owner_id})
 
    return res.json({
      id,
      title,
      pages
    })
  }

  async update (req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      pages: Yup.number().required()
    })

    const schemaIsValid = await schema.isValid(req.body)

    if(!schemaIsValid){
      return res.status(400).json({ error: 'Erro de validação' })
    }

    const book = await Book.findByPk(req.params.id)
    if (!book) {
      return res.status(400).json({ error: 'Livro não encontrado!' })
    }

    if (book.owner_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissões para alterar esse livro!' })
    }

    const { 
      id,
      title,
      pages
    } = await book.update(req.body)

    return res.json({
      id,
      title,
      pages
    })
  }

  async delete(req, res) {
    const book = await Book.findByPk(req.params.id)
    if (!book) {
      return res.status(400).json({ error: 'Livro não encontrado!' })
    }

    if (book.owner_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissões para excluir esse livro!' })
    }

    await book.destroy()

    return res.status(204).json()
  }
}

export default new BooksController()