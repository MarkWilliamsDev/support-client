import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { UIStore } from './uiStore'
import { SupportTicketsStore } from './supportTicketsStore'
import { GlobalMessagesStore } from './globalMessagesStore'

enableStaticRendering(typeof window === 'undefined')

export class RootStore {
  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
    this.supportTicketsStore = new SupportTicketsStore(this)
    this.globalMessagesStore = new GlobalMessagesStore(this)
  }
}
