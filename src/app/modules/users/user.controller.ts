import { RequestHandler } from 'express';
import { UserService } from './user.service';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
const createUser = catchAsync(async (req, res, next) => {
  const  user  = req.body;
  const {data,message,statusCode,success} = await UserService.createUser(user);
  next();

  sendResponse(res, {
    statusCode: statusCode,
    success: success,
    message: message,
    data: data,
  });
});

const loginUser = catchAsync(async (req, res, next) => {
  const  user  = req.body;
  const {data,message,statusCode,success} = await UserService.loginUser(user);
  next();

  sendResponse(res, {
    statusCode: statusCode,
    success: success,
    message: message,
    data: data,
  });
});

export const UserController = {
  createUser,
  loginUser
};
