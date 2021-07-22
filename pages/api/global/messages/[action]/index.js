import { backendActions } from '@/config/globalVariables'
import GlobalMessage from '@/models/globalMessage'
import { handleApiError } from '@/utils/helpers/handleApiError'
import connectDB from '@/utils/middleware/mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { message, _id, createdAt, ...rest } = req.body

    switch (req.query.action) {
      case backendActions.CREATE:
        try {
          const newMessage = new GlobalMessage({
            ...rest,
            messages: { message },
            createdAt: new Date(),
          })
          await newMessage.save()

          res.send(newMessage)
        } catch (error) {
          handleApiError(res, 'GlobalMessage Create Error', error)
        }
        break
      case backendActions.EDIT:
        {
          GlobalMessage.findByIdAndUpdate(
            _id,
            {
              ...rest,
              createdAt,
            },
            { new: true },
            async (err, doc) => {
              if (err) {
                return handleApiError(res, 'GlobalMessage Edit Error', err)
              }

              const newMessagesArray = doc.messages.map(
                ({ _id, createdAt }, index) => {
                  return { _id, message: message[index], createdAt }
                }
              )

              doc.messages = newMessagesArray

              await doc.save()

              res.send(doc)
            }
          )
        }
        break
      case backendActions.ADD:
        {
          GlobalMessage.findById(_id, async (err, doc) => {
            if (err) {
              return handleApiError(res, 'GlobalMessage Add Error', err)
            }

            const newMessage = { ...message, createdAt: new Date() }

            doc.messages.push(newMessage)

            console.log(doc)

            await doc.save()

            res.send(doc)
          })
        }
        break
      default:
        break
    }
  }
}

export default connectDB(handler)
