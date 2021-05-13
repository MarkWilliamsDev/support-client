import connectDB from '../../../../middleware/mongodb'
import SupportTicket from '../../../../models/supportTicket'

export const supportTicketsRouteHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      const supportTickets = await SupportTicket.find()

      res.send(supportTickets)
      break
    case 'POST':
      const newTicket = req.body

      const supportTicket = await SupportTicket.findById(newTicket._id)

      supportTicket.overwrite(newTicket)

      await supportTicket.save()

      res.send(supportTicket)

    default:
      break
  }
}

export default connectDB(supportTicketsRouteHandler)
