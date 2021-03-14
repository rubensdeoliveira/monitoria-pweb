import jwt from 'jsonwebtoken'
import * as Yup from 'yup'

import User from '../models/User'
import authConfig from '../../config/auth'

class SessionsController {
  async store (req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const schemaIsValid = await schema.isValid(req.body)

    if(!schemaIsValid){
      return res.status(400).json({ error: 'Erro de validação' })
    }

    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user){
      return res.status(401).json({ error: 'Usuário não encontrado' })
    }

    const checkPassword = await user.checkPassword(password)

    if (!checkPassword){
      return res.status(401).json({ error: 'Senha incorreta' })
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionsController()