import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { errorlogger } from '../../../shared/logger'
import config from '../../config/index'
import { IUser, IUserResponse } from './user.interface'
import { User } from './user.model'
import { getUserId } from './user.utils'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const createUser = async (user: IUser): Promise<IUserResponse> => {

  try {
    const id = await getUserId()
    // if (!user.password) user.password = config.user_default_password as string
    const existingUser = await User.find({email:user?.email})
    console.log('existingUser', existingUser)
    if(existingUser?.length > 0){ return {
      data: null,
      message: 'User alrady exists',
      statusCode: httpStatus.NOT_ACCEPTABLE,
      success: false
    } 
  }
    const hash = bcrypt.hashSync(user?.password, config.password_solt || 10);
    user.password = hash
    const createUser = await User.create(user)
 console.log('createUser', createUser)
      return {
        data: createUser,
        message: 'User created successfull',
        statusCode: httpStatus.OK,
        success: true
      } 
    
      
  } catch (error) {
    errorlogger.error("Create user faild", error)
    return {
      data: null,
      message: 'User created Faild',
      statusCode: httpStatus.NOT_ACCEPTABLE,
      success: false
    }
  }
   
}


const loginUser = async (user: IUser): Promise<IUserResponse> => {

  try {

    console.log('user', user)

    const findUser = await User.find({ email: user?.email }).lean()

    console.log('findUser', findUser)
    if (!findUser)   return {
      data: null,
      message: 'User not Found!',
      statusCode: httpStatus.NOT_ACCEPTABLE,
      success: false
    }

    if(findUser?.length <1){
      return {
        data: null,
        message: "User not Found!",
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false
      }
    }

    const match = bcrypt.compareSync(user?.password, findUser[0]?.password); // true



    if (!match) {

      return {
        data: null,
        message: 'Wrong Password!',
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false
      }
    }
    const token =  jwt.sign({data:findUser[0]},config.jwt_secret as string,{expiresIn:config.auth_exp})


    return   {
      data: {...findUser[0],password:'',token},
      message: 'Login Successfull',
      statusCode: httpStatus.OK,
      success: true
    }

  } catch (error) {
    errorlogger.error("login  faild", error)
    console.log('error', error)
    return   {
      data: null,
      message: 'Login Faild!',
      statusCode: httpStatus.EXPECTATION_FAILED,
      success: false
    }
  }
}

export const UserService = {
  createUser,
  loginUser
}
