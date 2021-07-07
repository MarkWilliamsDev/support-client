import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStore } from 'src/StoreProvider'

import ListContainer from '@/components/list/ListContainer'
import GlobalMessageListItem from '@/components/list/listItems/specific/GlobalMessageListItem'

function messages() {
  const { uiStore, globalMessagesStore } = useStore()
  const { globalMessages } = globalMessagesStore

  useEffect(() => {
    uiStore.setIsPending()
    globalMessagesStore.fetchAll()
  }, [uiStore.setIsPending])

  return (
    <>
      <ListContainer
        list={globalMessages}
        ItemComponent={GlobalMessageListItem}
      />
    </>
  )
}

export default observer(messages)
