import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorMessage } from '../app/interfaces/error'
import { IGenericErrorResponse } from '../app/interfaces/common'

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  console.log('jasimzod', error)
  const errors: IGenericErrorMessage[] = Object.values(error?.errors).map(
    (item: ZodIssue) => {
      return {
        path: item?.path[item.path.length - 1],
        message: item?.message,
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

export default handleZodError
