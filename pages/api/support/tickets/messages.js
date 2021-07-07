import connectDB from '@/utils/middleware/mongodb'
import SupportTicket from '@/models/supportTicket'

const handler = async (req, res) => {
  switch (req.method) {
    case 'PUT':
      try {
        const { itemId, message } = req.body

        const supportTicket = await SupportTicket.findById(itemId)

        supportTicket.hasNewMessage = true
        supportTicket.lastMessageFromUser = false

        supportTicket.messages.push({
          message,
          isFromUser: false,
          from: 'support',
          createdAt: new Date(),
        })

        await supportTicket.save()

        res.send(supportTicket)
      } catch (error) {
        console.log(error)
      }
      break
    default:
      break
  }
}

export default connectDB(handler)
