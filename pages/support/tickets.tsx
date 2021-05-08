import { GetServerSideProps } from 'next'
import { connectToDatabase } from '../../util/mongodb'

import { TicketsProps } from 'apiTypes'
import ListContainer from '../../components/list/ListContainer'
import SupportTicketListItem from '../../components/list/listItems/SupportTicketListItem'

const tickets = ({ supportTickets }: TicketsProps) => {
  return (
    <div className="border">
      <div>
        <ListContainer
          list={supportTickets}
          ItemComponent={SupportTicketListItem}
        />
      </div>
    </div>
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
