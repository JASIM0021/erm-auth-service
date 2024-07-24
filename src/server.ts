import mongoose from 'mongoose'
import app from './app/app'
import config from './app/config/index'
import { logger, errorlogger } from './shared/logger'
import { Server } from 'http'
let server: Server

async function DbConnect() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connected...`)
    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(`Database connection error: ${error}`)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection detected , we are closing our server...')
    errorlogger.error(error)
    if (server) {
      server.close(() => {
        errorlogger.error(error)
      })
    }
    process.exit(1)
  })
}
DbConnect()
process.on('uncaughtException', err => {
  console.log('uncaughtException Exception is detected ')
  errorlogger.error(err)
  process.exit(1)
})

process.on('SIGTERM', () => {
  errorlogger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
