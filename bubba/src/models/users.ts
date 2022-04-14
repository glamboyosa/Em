import { Schema, model } from 'mongoose'
import { TUser } from '../helpers/types'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
  },
  urls: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Url',
    },
  ],
})

const User = model<TUser>('User', userSchema)

export { User }
