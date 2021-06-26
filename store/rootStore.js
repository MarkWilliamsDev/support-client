import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { UIStore } from './uiStore'
import { SupportTicketsStore } from './supportTicketsStore'

enableStaticRendering(typeof window === 'undefined')

export class RootStore {
  lastUpdate = 0

  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
    this.supportTicketsStore = new SupportTicketsStore(this)
  }
}
