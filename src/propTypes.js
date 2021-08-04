import { string, arrayOf, shape, bool, oneOf } from 'prop-types'

const _id = string
const createdAt = string
const subject = string

export const messagePropTypes = shape({
  _id,
  createdAt,
  message: string,
  isFromUser: bool,
})

const messages = arrayOf(messagePropTypes)

export const globalMessagePropTypes = shape({
  _id,
  createdAt,
  from: string.isRequired,
  subject: subject.isRequired,
  messages,
})

export const supportTicketPropTypes = shape({
  _id,
  _user: string,
  createdAt,
  category: string,
  hasNewMessage: bool,
  lastMessageFromUser: bool,
  messages,
  name: string,
  subject,
  ticketStatus: oneOf(['active', 'closed']),
})
