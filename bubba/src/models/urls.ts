import { Schema, model } from 'mongoose'

const urlSchema = new Schema({
  originalLink: String,
  hash: {
    type: String,
    unique: true,
    length: 6,
  },
  creationDate: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Url = model('Url', urlSchema)

export { Url }
