import mongoose from 'mongoose'
const { Schema } = mongoose

import messageSchema from './message'

const supportTicketSchema = new Schema(
  {
    name: {
      type: String,
    },
    subject: {
      type: String,
    },
    ticketStatus: {
      type: String,
    },
    messages: {
      type: [messageSchema],
    },
    hasNewMessage: {
      type: Boolean,
    },
    lastMessageFromUser: {
      type: Boolean,
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

mongoose.models = {}

const SupportTicket = mongoose.model('supportTicket', supportTicketSchema)

export default SupportTicket
