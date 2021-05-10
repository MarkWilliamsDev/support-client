import connectDB from '../../../middleware/mongodb'
import SupportTicket from '../../../models/supportTicket'

export const supportTicketRouteHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      const supportTickets = await SupportTicket.find()

      res.send(supportTickets)
      break

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

        res.status(200).send(supportTicket)
      } catch (error) {
        console.log(error)
      }
      break
    default:
      break
  }
}

export default connectDB(supportTicketRouteHandler)
