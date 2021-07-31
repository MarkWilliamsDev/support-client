import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { backendActions } from '@/config/globalVariables'

enableStaticRendering(typeof window === 'undefined')

const { CREATE, EDIT, ADD } = backendActions

export class GlobalMessagesStore {
  globalMessages = []
  globalMessage = {}
  globalMessageIndex = null

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

  setGlobalMessage(itemId) {
    const itemIndex = this.globalMessages.findIndex((item) => item._id === itemId)

    this.globalMessage = this.globalMessages[itemIndex]

    this.globalMessageIndex = itemIndex
  }

  clearGlobalMessage() {
    this.globalMessage = {}
  }

  async submitMessage(valuesToSubmit) {
    const res = await axios.post(`/api/global/messages/${CREATE}`, valuesToSubmit)

    const newItem = res.data

    runInAction(() => {
      const globalMessages = this.globalMessages
      globalMessages.push(newItem)
      this.globalMessages = globalMessages

      this.rootStore.uiStore.setNotPending()
    })
  }

  async editMessage(valuesToSubmit) {
    const res = await axios.post(`/api/global/messages/${EDIT}`, valuesToSubmit)

    const savedItem = res.data
    runInAction(() => {
      const globalMessages = this.globalMessages

      const index = this.globalMessageIndex

      globalMessages[index] = savedItem

      this.globalMessages = globalMessages

      this.rootStore.uiStore.setNotPending()
    })
  }

  async addMessage(valuesToSubmit) {
    const res = await axios.post(`/api/global/messages/${ADD}`, {
      message: valuesToSubmit,
      _id: this.globalMessage._id,
    })

    runInAction(() => {
      this.globalMessages[this.globalMessageIndex] = res.data

      this.rootStore.uiStore.setNotPending()
    })
  }
}
