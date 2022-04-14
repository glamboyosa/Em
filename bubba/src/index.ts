import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import redirect from './routes/redirect'
import auth from './routes/auth'
import url from './routes/url'
const app = express()
config()
app.use(cookieParser())
console.log(path.join(__dirname.split('dist')[0], 'cupcake', 'build'))
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
)
app.use(express.json())
app.use(
  express.static(path.join(__dirname.split('dist')[0], 'cupcake', 'build')),
)
app.use('/', redirect)
app.use('/api/auth', auth)
app.use('/api/links', url)
const mongo_url = (
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_DEV_URL
    : process.env.MONGO_PROD_URL
) as string

mongoose
  .connect(mongo_url)
  .then((_) =>
    console.log(`Successfully connected to ${process.env.NODE_ENV} DB 🚀. `),
  )
  .catch((err) => {
    console.log(JSON.stringify(err))
    throw new Error(err.message)
  })
// start express server on the default port or 5000
const port = process.env.PORT ?? 5000
app.listen(port, () => {
  console.log(`Server started on port ${port} ⚡️.`)
})
