import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { toJS } from 'mobx'

import { SupportTicket, SupportTicketsProps } from 'apiTypes'
import ListContainer from '../../src/components/list/ListContainer'
import SupportTicketListItem from '../../src/components/list/listItems/SupportTicketListItem'
import ItemDisplayContainer from '../../src/components/display/ItemDisplayContainer'
import FormContainer from '../../src/components/forms/FormContainer'
import SupportTicketReplyForm from '../../src/components/forms/specificForms/SupportTicketReplyForm'
import { useStore } from '../../src/StoreProvider'

function tickets() {
  const router = useRouter()

  const { itemId } = router.query

  const { uiStore, supportTicketsStore } = useStore()

  useEffect(() => {
    uiStore.setIsPending()
    supportTicketsStore.fetchAll()
  }, [supportTicketsStore])

  const selectedItem = supportTicketsStore.supportTicket

  console.log(uiStore.pending)

  useEffect(() => {
    if (uiStore.pending) return

    supportTicketsStore.setSupportTicket(itemId)
  }, [itemId, supportTicketsStore.supportTickets, uiStore.pending])

  const renderTicket = () => {
    return (
      <>
        <ItemDisplayContainer item={selectedItem} />
        <FormContainer>
          <SupportTicketReplyForm itemId={selectedItem?._id} />
        </FormContainer>
      </>
    )
  }

  const renderListContainer = () => {
    return (
      <ListContainer
        list={supportTicketsStore.supportTickets}
        ItemComponent={SupportTicketListItem}
      />
    )
  }

  return <>{itemId ? renderTicket() : renderListContainer()}</>
}

export default observer(tickets)
