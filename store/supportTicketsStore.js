import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class SupportTicketsStore {
  supportTickets = []
  supportTicket = {}

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
    this.supportTicket = this.supportTickets.filter(
      (item) => item._id === itemId
    )[0]
  }

  async addSubItem(inputValues) {
    const res = await axios.put('/api/support/tickets', inputValues)

    const updatedItem = res.data

    runInAction(() => {
      const supportTickets = this.supportTickets

      const index = supportTickets.findIndex(
        (item) => item._id === updatedItem._id
      )

      supportTickets[index] = updatedItem

      this.supportTickets = supportTickets
      this.rootStore.uiStore.setNotPending()
    })
  }
}
