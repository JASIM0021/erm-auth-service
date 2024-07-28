import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser>(
  {
  fullName:String,
  email:String,
  gender:String,
  age:Number,
  password:String
  },
  { timestamps: true }
)

export const User = model<IUser, UserModel>('User', userSchema)
