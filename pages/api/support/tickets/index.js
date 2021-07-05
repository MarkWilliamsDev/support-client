import connectDB from '@/utils/middleware/mongodb'
import SupportTicket from '@/models/supportTicket'

export const supportTicketsRouteHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      const supportTickets = await SupportTicket.find()

      res.send(supportTickets)
      break
    case 'POST':
      const updatedTicket = req.body

      const supportTicket = await SupportTicket.findById(updatedTicket._id)

      supportTicket.overwrite(updatedTicket)

      await supportTicket.save()

      res.send(supportTicket)

    default:
      break
  }
}

export default connectDB(supportTicketsRouteHandler)
