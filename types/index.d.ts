declare module 'apiTypes' {
  export type SupportTicket = {
    _id: string
    name: string
    emailAddress: string
    subject: string
    ticketStatus: string
    hasNewMessage: boolean
    lastMessageFromUser: boolean
    messages: []
    _user: string
    createdAt: Date
  }

  export interface TicketsProps {
    supportTickets: SupportTicket[]
  }
}

module.exports = {
  SupportTicket,
  TicketsProps,
}
