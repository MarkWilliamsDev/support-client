import { GetServerSideProps } from 'next'
import { connectToDatabase } from '../../util/mongodb'

import { SupportTicket } from '../../types/apiTypes'

type TicketsProps = {
  supportTickets: SupportTicket[]
}

const tickets = ({ supportTickets }: TicketsProps) => {
  const renderSupportTickets = () => {
    return supportTickets.map((supportTicket) => {
      return (
        <div key={supportTicket._id}>
          <div>{supportTicket.name}</div>
        </div>
      )
    })
  }
  
  return (
    <div>
      SupportTickets Yeah!<div>{renderSupportTickets()}</div>
    </div>
  )
}

export default tickets


export const getServerSideProps: GetServerSideProps = async (context) => {
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
