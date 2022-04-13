import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: String,
  },
  url: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Url',
    },
  ],
})

const User = model('User', userSchema)

export { User }
