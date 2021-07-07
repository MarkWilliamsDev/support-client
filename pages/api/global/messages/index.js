import GlobalMessage from '@/models/globalMessage'
import connectDB from '@/utils/middleware/mongodb'

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      const globalMessages = await GlobalMessage.find()

      res.send(globalMessages)
      break
    case 'POST':
      const { message, ...rest } = req.body

      const newMessage = new GlobalMessage({
        ...rest,
        messages: { message },
        createdAt: new Date(),
      })
      await newMessage.save()

      res.send(newMessage)
      break
    default:
      break
  }
}

export default connectDB(handler)
