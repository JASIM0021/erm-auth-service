import express from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../middleware/RequestValidation'
import { createUserZodSchema, loginUserZodSchema } from './usesr.validation'
const router = express.Router()

router.post(
  '/create-user',
  validateRequest(createUserZodSchema),
  UserController.createUser
)
router.post(
  '/login-user',
  validateRequest(loginUserZodSchema),
  UserController.loginUser
)

export const UserRoutes = router
