import express from 'express'
import isEmail from 'validator/lib/isEmail'
import jwt from 'jsonwebtoken'
import { TUser } from '../helpers/types'
import { User } from '../models/users'
const router = express.Router()

router.post('/sign-in', async (req, res) => {
  const { name, email } = req.body as TUser

  if (!isEmail(email) && name.length < 2) {
    return res
      .status(400)
      .send({ message: 'Invalid Input', data: null, errors: [] })
  }

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      const token = jwt.sign({ userId: existingUser.id }, process.env.jid!, {
        expiresIn: '7d',
      })
      const maxAge = 1000 * 60 * 60 * 24 * 7 // expires in a week
      res.cookie('snowman', token, {
        secure: true,
        maxAge: maxAge,
        httpOnly: process.env.NODE_ENV === 'production',
      })
      return res
        .status(200)
        .send({ message: 'Success', data: existingUser, errors: [] })
    }
    // no user exists, create one
    const user = await User.create({
      name,
      email,
    })
    await user.save()
    const token = jwt.sign({ userId: user.id }, process.env.jid!, {
      expiresIn: '7d',
    })
    const maxAge = 1000 * 60 * 60 * 24 * 7 // expires in a week
    res.cookie('snowman', token, {
      secure: true,
      maxAge: maxAge,
      httpOnly: process.env.NODE_ENV === 'production',
    })
    return res.status(200).send({ message: 'Success', data: user, errors: [] })
  } catch (e) {
    return res
      .status(404)
      .send({ message: e.message, data: null, errors: [JSON.stringify(e)] })
  }
})

router.get('/sign-out', async (req, res) => {
  res.clearCookie('snowman')
  res.status(200).send({ message: 'Success', data: null, errors: [] })
})
export default router
