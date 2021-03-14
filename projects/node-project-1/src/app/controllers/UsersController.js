import * as Yup from 'yup'

import User from '../models/User'

class UsersController {
  async store (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      role: Yup.string().required(),
    })

    const schemaIsValid = await schema.isValid(req.body)

    if(!schemaIsValid){
      return res.status(400).json({ error: 'Erro de validação' })
    }

    const userExists = await User.findOne({ where: { email: req.body.email } })

    if(userExists) {
      return res.status(400).json({ error: 'Usuário já existente' })
    }

    const { id, name, email, role } = await User.create(req.body)
 
    return res.json({
      id,
      name,
      email,
      role
    })
  }

  async update (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) => oldPassword ? field.required() : field),
      confirmPassword: Yup.string().min(6).when('password', (password, field) => 
        password ? field.required().oneOf([Yup.ref('password')]) : field),
      role: Yup.string(),
    })

    const schemaIsValid = await schema.isValid(req.body)

    if(!schemaIsValid){
      return res.status(400).json({ error: 'Erro de validação' })
    }

    const { email, oldPassword } = req.body

    const user = await User.findByPk(req.userId)

    if(email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } })

      if(userExists) {
        return res.status(400).json({ error: 'Usuário já existente' })
      }
    }

    if (oldPassword){
      const checkPassword = await user.checkPassword(oldPassword)

      if(!checkPassword){
        return res.status(401).json({ error: 'Senha antiga incorreta' })
      }
    }

    const { 
      id,
      name,
      role
    } = await user.update(req.body)

    return res.json({
      id,
      name,
      email,
      role
    })
  }
}

export default new UsersController()