import { Model } from 'mongoose'
import { boolean, number } from 'zod'


// firstName,
// LastName,
// Email,
// Gender,
// Age,
// Password,
// ConfirmPassword
export type IUser = {
  fullName:string,
  email:string,
  gender:string,
  age:number,
  password:string
  token?:string


  
}

export type IUserResponse = {
  
    data:IUser|null|undefined,
    message:string,
    statusCode:number,
    success:boolean
}


export type UserModel = Model<IUser, Record<string, unknown>>
