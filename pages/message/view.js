import { useStore } from 'src/StoreProvider'
import { toJS } from 'mobx'

function view() {
  const { globalMessagesStore } = useStore()

  const globalMessages = toJS(globalMessagesStore.globalMessages)
  console.log(globalMessages)

  return <div>messagesView</div>
}

export default view
