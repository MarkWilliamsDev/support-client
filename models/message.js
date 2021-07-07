const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema(
  {
    message: {
      type: String,
    },
    isFromUser: {
      type: Boolean,
    },
    from: {
      type: String,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

export default messageSchema
