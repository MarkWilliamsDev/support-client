declare module 'apiTypes' {
  export type SupportTicket = {
    _id: string
    name: string
    subject: string
    ticketStatus: string
    hasNewMessage: boolean
    lastMessageFromUser: boolean
    messages: SupportTicketMessage[]
    _user: string
    createdAt: Date
  }

  export type SupportTicketMessage = {
    message: string
    _id: string
    isFromUser: boolean
    from: string
    createdAt: Date
  }

  export type SupportTicketsProps = {
    supportTickets: SupportTicket[]
  }

  export type ListContainerProps = {
    list: SupportTicket[] | SupportTicketMessage[]
    ItemComponent: ComponentType<ItemComponentProps>
    onItemSelect?: (item: ItemComponentProps) => void
  }

  type ItemComponentProps = {
    item: SupportTicket | SupportTicketMessage
  }
}

module.exports = {
  SupportTicket,
  SupportTicketMessage,
  SupportTicketsProps,
  ListContainerProps,
}
