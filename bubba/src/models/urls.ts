import { Schema, model } from 'mongoose'
import { TUrls } from '../helpers/types'

const urlSchema = new Schema<TUrls>({
  originalLink: String,
  hash: {
    type: String,
    unique: true,
    length: 6,
  },
  creationDate: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Url = model<TUrls>('Url', urlSchema)

export { Url }
