import express from 'express'

const router = express.Router()

router.get('/:hash', (_, res) =>
  res.redirect(301, 'https://github.com/glamboyosa'),
)

export default router
