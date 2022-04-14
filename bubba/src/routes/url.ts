import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/users'
import { Url } from '../models/urls'

const router = express.Router()

router.post('/custom', async (req, res) => {
  try {
    const { hash, originalLink }: { hash: string; originalLink: string } =
      req.body
    const cookie = req.cookies.snowman

    if (!cookie) {
      return res.status(401).send({
        message: 'Something went wrong. User is unauthenticated.',
        data: null,
        errors: ['user is unauthenticated'],
      })
    }

    const token = jwt.verify(cookie, process.env.jid!) as {
      payload: { userId: string }
    }
    console.log(token)
    if (!token) {
      return res.status(401).send({
        message: 'Something went wrong. User is unauthenticated.',
        data: null,
        errors: ['user is unauthenticated'],
      })
    }

    const user = await User.findById(token.payload.userId)
    if (!user) {
      return res.status(401).send({
        message: 'Something went wrong',
        data: null,
        errors: ['user is unauthenticated'],
      })
    }
    const existingHash = await Url.findOne({ hash })
    if (existingHash) {
      return res.status(401).send({
        message: 'Short link taken.',
        data: null,
        errors: ['Hash in use.'],
      })
    }
    const url = await Url.create({
      creationDate: new Date().toISOString(),
      originalLink,
      hash,
      user,
    })

    return res.status(200).send({
      message: 'Custom short link available',
      data: url,
      errors: [],
    })
  } catch (e) {
    return res
      .status(404)
      .send({ message: e.message, data: null, errors: [JSON.stringify(e)] })
  }
})

export default router
