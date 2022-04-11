import express from 'express'
import cors from 'cors'
import path from 'path'
import { config } from 'dotenv'
const app = express()
config()
app.use(cors())
app.use(
  express.static(path.join(__dirname.split('dist')[0], 'cupcake', 'build')),
)
app.use(express.json())

console.log(path.join(__dirname.split('dist')[0], 'cupcake', 'build'))

app.get('/:key', (_, res) => {
  res.redirect(301, 'https://github.com/glamboyosa')
})
// start express server on the default port or 5000
const port = process.env.PORT ?? 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
