import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { toJS } from 'mobx'

import ListContainer from '../../src/components/list/ListContainer'
import SupportTicketListItem from '../../src/components/list/listItems/SupportTicketListItem'
import ItemDisplayContainer from '../../src/components/display/ItemDisplayContainer'
import { useStore } from '../../src/StoreProvider'

function tickets() {
  const router = useRouter()

  const { itemId } = router.query

  const { uiStore, supportTicketsStore } = useStore()
  const { supportTickets, supportTicket } = supportTicketsStore

  useEffect(() => {
    uiStore.setIsPending()
    supportTicketsStore.fetchAll()
  }, [supportTicketsStore])

  useEffect(() => {
    if (uiStore.pending) return
    supportTicketsStore.setSupportTicket(itemId)
  }, [itemId, supportTickets, uiStore.pending])

  const renderTicket = () => {
    return <ItemDisplayContainer item={supportTicket} />
  }

  const renderListContainer = () => {
    return (
      <ListContainer
        list={supportTickets}
        ItemComponent={SupportTicketListItem}
      />
    )
  }

  return <>{itemId ? renderTicket() : renderListContainer()}</>
}

export default observer(tickets)
