import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../app/interfaces/error'
import { IGenericErrorResponse } from '../app/interfaces/common'

const handleValidationError = (
  err: mongoose.Error.ValidatorError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err?.errors).map(
    (item: mongoose.Error.ValidationError | mongoose.Error.CastError) => {
      return {
        path: item.path,
        message: item.message, // Complete the 'message' property here
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}
export default handleValidationError
