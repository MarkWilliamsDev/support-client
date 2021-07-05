import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import ListContainer from '@/components/list/ListContainer'
import SupportTicketListItem from '@/components/list/listItems/SupportTicketListItem'
import ItemDisplayContainer from '@/components/display/ItemDisplayContainer'
import { useStore } from '../../src/StoreProvider'

function Tickets() {
  const router = useRouter()

  const { itemId } = router.query

  const { uiStore, supportTicketsStore } = useStore()
  const { supportTickets, supportTicket } = supportTicketsStore

  useEffect(() => {
    uiStore.setIsPending()
    supportTicketsStore.fetchAll()
  }, [supportTicketsStore, uiStore])

  useEffect(() => {
    if (uiStore.pending) return
    supportTicketsStore.setSupportTicket(itemId)
  }, [itemId, supportTickets, uiStore.pending, supportTicketsStore])

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

export default observer(Tickets)
