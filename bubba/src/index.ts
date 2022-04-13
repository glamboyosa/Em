import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import { config } from 'dotenv'
const app = express()
config()
app.use(cors())
app.use(
  express.static(path.join(__dirname.split('dist')[0], 'cupcake', 'build')),
)
app.use(express.json())

console.log(path.join(__dirname.split('dist')[0], 'cupcake', 'build'))

app.get('/:hash', (_, res) => {
  res.redirect(301, 'https://github.com/glamboyosa')
})
const mongo_url = (
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_DEV_URL
    : process.env.MONGO_PROD_URL
) as string

mongoose
  .connect(mongo_url)
  .then((_) =>
    console.log(`Successfully connected to ${process.env.NODE_ENV} db `),
  )
  .catch((err) => {
    console.log(JSON.stringify(err))
    throw new Error(err.message)
  })
// start express server on the default port or 5000
const port = process.env.PORT ?? 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
