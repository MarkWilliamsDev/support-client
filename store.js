import axios from 'axios'
import { action, makeObservable, observable, runInAction } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class Store {
  supportTickets = []
  lastUpdate = 0
  pending = false

  constructor() {
    makeObservable(this, {
      supportTickets: observable,
      lastUpdate: observable,
      pending: observable,
      setIsPending: action.bound,
      fetchAll: action.bound,
      addSubItem: action.bound,
    })
  }

  setIsPending() {
    this.pending = true
  }

  async fetchAll() {
    const res = await axios.get('/api/support/tickets')

    runInAction(() => {
      this.supportTickets = res.data
      this.pending = false
    })
  }

  async addSubItem(inputValues) {
    const res = await axios.put('/api/support/tickets', inputValues)

    runInAction(() => {
      const updatedItem = res.data

      const supportTickets = this.supportTickets

      const index = supportTickets.findIndex(
        (item) => item._id === updatedItem._id
      )

      supportTickets[index] = updatedItem

      console.log(supportTickets)

      this.supportTickets = supportTickets
      this.pending = false
    })
  }

  hydrate = (data) => {
    if (!data) return

    this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
    this.supportTickets = !!data.supportTickets
  }
}
