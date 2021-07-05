import mongoose from 'mongoose'
import environment from '@/config/environment.json'

const { APP_MODE } = environment

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }

  await mongoose.connect(
    APP_MODE === 'DEV' ? process.env.MONGODB_URI : process.env.MONGODB_URI_LIVE,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )

  return handler(req, res)
}

export default connectDB
