import { createContext, useContext } from 'react'
import { RootStore } from 'src/store/rootStore'

let store

export const StoreContext = createContext(null)

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function StoreProvider({ children, initialState: initialData }) {
  const store = initializeStore(initialData)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData = null) {
  const _store = store ?? new RootStore()

  if (initialData) {
    _store.hydrate(initialData)
  }

  if (typeof window === 'undefined') return _store

  if (!store) store = _store

  return _store
}
