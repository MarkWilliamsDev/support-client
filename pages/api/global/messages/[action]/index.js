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
        GlobalMessage.findByIdAndUpdate(
          _id,
          {
            ...rest,
            createdAt,
          },
          { new: true },
          async (err, doc) => {
            if (err) {
              return handleApiError(err)
            }

            const newMessagesArray = doc.messages.map(
              ({ _id, createdAt }, index) => {
                return { _id, message: message[index], createdAt }
              }
            )

            doc.messages = newMessagesArray

            await doc.save()

            console.log(doc)

            res.send(doc)
          }
        )
        break
      default:
        break
    }
  }
}

export default connectDB(handler)
