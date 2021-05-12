import { enableStaticRendering } from 'mobx-react-lite'
import { makeAutoObservable } from 'mobx'

enableStaticRendering(typeof window === 'undefined')

export class UIStore {
  pending = false

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  setIsPending() {
    this.pending = true
  }

  setNotPending() {
    this.pending = false
  }
}
