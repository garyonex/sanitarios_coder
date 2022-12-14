import { config } from 'dotenv'
config()

export default {
  mongodbUrl: process.env.MONGO_DB_URI
}
