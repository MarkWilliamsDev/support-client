import { GetServerSideProps } from 'next'
import { connectToDatabase } from '../../util/mongodb'

import { SupportTicketsProps } from 'apiTypes'
import ListContainer from '../../components/list/ListContainer'
import SupportTicketListItem from '../../components/list/listItems/SupportTicketListItem'

const tickets = ({ supportTickets }: SupportTicketsProps) => {
  return (
    <ListContainer
      list={supportTickets}
      ItemComponent={SupportTicketListItem}
    />
  )
}

export default tickets

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase()

  const supportTickets = await db
    .collection('supporttickets')
    .find({})
    .toArray()
  return {
    props: {
      supportTickets: JSON.parse(JSON.stringify(supportTickets)),
    },
  }
}
