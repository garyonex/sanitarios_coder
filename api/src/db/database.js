import mongoose from 'mongoose'
import config from './config.js'
;(async () => {
  try {
    mongoose.set('strictQuery', false)
    const db = await mongoose.connect(config.mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Database connect : ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
})()
