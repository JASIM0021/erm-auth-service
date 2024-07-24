import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  user_default_password: process.env.USER_DEFAULT_PASSWORD,
  password_solt:process.env.SOLT,
  jwt_secret:process.env.JWT_SECRET,
  auth_exp:process.env.AUTH_EXPIRE,
}
