import StringDisplay from '@/components/display/elements/StringDisplay'
import DateDisplay from '@/components/display/elements/DateDisplay'
import SelectInput from '@/components/forms/elements/SelectInput'
import { useStore } from 'src/StoreProvider'
import { supportTicketPropTypes } from '@/propTypes'

const statusOptions = ['active', 'closed']

function SupportTicketInfoHeader({ item }) {
  const { supportTicketsStore, uiStore } = useStore()

  const statusChangeHandler = (e) => {
    uiStore.setIsPending()

    const currentSupportTicket = toJS(supportTicketsStore.supportTicket)

    const updatedSupportTicket = {
      ...currentSupportTicket,
      ticketStatus: e.target.value,
    }

    supportTicketsStore.updateTicket(updatedSupportTicket)
  }

  const renderStatusSelect = () => {
    return (
      <SelectInput
        onChange={statusChangeHandler}
        options={statusOptions}
        currentOption={item?.ticketStatus}
      />
    )
  }

  return (
    <div className="row">
      <div className="col">
        <div>
          <StringDisplay label={'Name: '} content={item?.name} />
        </div>
        <div>
          <StringDisplay label={'Subject: '} content={item?.subject} />
        </div>
        {renderStatusSelect()}
      </div>
      <div className="col">
        <div>
          <DateDisplay date={item?.createdAt} />
        </div>
        <div>
          <StringDisplay label={'User ID: '} content={item?._user} />
        </div>
        <div>
          <StringDisplay label={'Ticket ID: '} content={item?._id} />
        </div>
      </div>
    </div>
  )
}

SupportTicketInfoHeader.propTypes = { item: supportTicketPropTypes }

export default SupportTicketInfoHeader
