import GlobalMessage from '@/models/globalMessage'
import connectDB from '@/utils/middleware/mongodb'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const globalMessages = await GlobalMessage.find()

    res.send(globalMessages)
  }
}

export default connectDB(handler)
