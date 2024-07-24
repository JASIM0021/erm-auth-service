import { z } from 'zod'

// firstName:String,
//   lastName:String,
//   email:String,
//   gender:String,
//   age:Number,
//   password:String
export const createUserZodSchema = z.object({
  body: z.object({
   
    firstName: z.string({
      required_error: 'firstName is required',
    }),
    lastName: z.string({
      required_error: 'lastName is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }).email("Email not Valid"),
    gender: z.string({
      required_error: 'gender is required',
    }),
    age: z.number({
      required_error: 'age is required',
    }),
    
    password: z.string({
      required_error:'password is required'
    }),
  }),
})
export const loginUserZodSchema = z.object({
  body: z.object({
   
   
    email: z.string({
      required_error: 'email is required',
    }).email("Email not Valid"),
    
    password: z.string({
      required_error:'password is required'
    }),
  }),
})
