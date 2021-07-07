import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class GlobalMessagesStore {
  globalMessages = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  async fetchAll() {
    const res = await axios.get('/api/global/messages')

    runInAction(() => {
      this.globalMessages = res.data
      this.rootStore.uiStore.setNotPending()
    })
  }

  async submitMessage(inputValues) {
    const res = await axios.post('/api/global/messages', inputValues)

    const newItem = res.data

    runInAction(() => {
      const globalMessages = this.globalMessages
      this.globalMessages = globalMessages.push(newItem)

      this.rootStore.uiStore.setNotPending()
    })
  }
}
