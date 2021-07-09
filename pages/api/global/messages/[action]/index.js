import GlobalMessage from '@/models/globalMessage'
import { handleApiError } from '@/utils/helpers/handleApiError'
import connectDB from '@/utils/middleware/mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { message, _id, createdAt, ...rest } = req.body

    switch (req.query.action) {
      case 'create':
        try {
          const newMessage = new GlobalMessage({
            ...rest,
            messages: { message },
            createdAt: new Date(),
          })
          await newMessage.save()

          res.send(newMessage)
        } catch (error) {
          handleApiError('GlobalMessage Create Error', error)
        }
        break
      case 'edit':
        try {
          const currentItem = await GlobalMessage.findById(_id)
          currentItem.overwrite({ ...rest, createdAt })
          await currentItem.save()

          res.send(currentItem)
        } catch (error) {
          handleApiError('GlobalMessage Edit Error', error)
        }
        break
      default:
        break
    }
  }
}

export default connectDB(handler)
