// import { GetServerSideProps } from 'next'
// import { connectToDatabase } from '../../util/mongodb'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../handlers/fetcher'
// import SupportTickets from '../../models/supportTickets'

import { SupportTicket, SupportTicketsProps } from 'apiTypes'
import { supportTicketsViewModes } from '../../src/viewModes/supportTicketsViewModes'
import ListContainer from '../../src/components/list/ListContainer'
import SupportTicketListItem from '../../src/components/list/listItems/SupportTicketListItem'
import ItemDisplayContainer from '../../src/components/display/ItemDisplayContainer'
import FormContainer from '../../src/components/forms/FormContainer'
import SupportTicketReplyForm from '../../src/components/forms/specificForms/SupportTicketReplyForm'
// import connectDB from '../../middleware/mongodb'

const tickets = () => {
  const { data: supportTickets } = useSWR('/api/support/tickets', fetcher)

  const { ALL_TICKETS, TICKET } = supportTicketsViewModes
  const [viewMode, setViewMode] = useState(ALL_TICKETS)
  const [selectedItem, setSelectedItem] = useState<SupportTicket>(undefined)

  const itemSelectHandler = (selectedItem: SupportTicket) => {
    setSelectedItem(selectedItem)
    setViewMode(TICKET)
  }

  const renderOnMode = () => {
    switch (viewMode) {
      case ALL_TICKETS:
        return renderListContainer()
      case TICKET:
        return renderTicket()
      default:
        break
    }
  }

  const renderListContainer = () => {
    return (
      <ListContainer
        list={supportTickets}
        ItemComponent={SupportTicketListItem}
        onItemSelect={itemSelectHandler}
      />
    )
  }

  const renderTicket = () => {
    return (
      <>
        <ItemDisplayContainer item={selectedItem} />
        <FormContainer>
          <SupportTicketReplyForm
            itemId={selectedItem._id}
            setSelectedItem={setSelectedItem}
          />
        </FormContainer>
      </>
    )
  }

  return renderOnMode()
}

export default tickets
