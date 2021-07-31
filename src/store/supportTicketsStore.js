import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class SupportTicketsStore {
  supportTickets = []
  supportTicket = {}
  supportTicketIndex = null

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  async fetchAll() {
    const res = await axios.get('/api/support/tickets')

    runInAction(() => {
      this.supportTickets = res.data
      this.rootStore.uiStore.setNotPending()
    })
  }

  setSupportTicket(itemId) {
    const supportTicketIndex = this.supportTickets.findIndex((item) => item._id === itemId)

    this.supportTicket = this.supportTickets[supportTicketIndex]

    this.supportTicketIndex = supportTicketIndex
  }

  async updateTicket(inputValues) {
    const res = await axios.post('/api/support/tickets', inputValues)

    const updatedItem = res.data

    runInAction(() => {
      const supportTickets = this.supportTickets

      supportTickets[this.supportTicketIndex] = updatedItem

      this.supportTickets = supportTickets
      this.rootStore.uiStore.setNotPending()
    })
  }

  async addMessage(inputValues) {
    const res = await axios.put('/api/support/tickets/messages', inputValues)

    const updatedItem = res.data

    runInAction(() => {
      const supportTickets = this.supportTickets

      supportTickets[this.supportTicketIndex] = updatedItem

      this.supportTickets = supportTickets
      this.rootStore.uiStore.setNotPending()
    })
  }
}
