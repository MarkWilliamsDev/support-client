import mongoose from 'mongoose'
const { Schema } = mongoose

import messageSchema from '@/models/message'

const globalMessageSchema = new Schema(
  {
    subject: {
      type: String,
    },
    from: {
      type: String,
    },
    messages: {
      type: [messageSchema],
    },
  },
  { timestamps: { createAt: true, updatedAt: false } }
)

mongoose.models = {}

const GlobalMessage = mongoose.model('globalMessage', globalMessageSchema)

export default GlobalMessage
