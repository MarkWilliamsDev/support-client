import { SupportTicket } from 'apiTypes'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useEffect, useState } from 'react'

import { useStore } from '../../../StoreProvider'
import FormContainer from '../../forms/FormContainer'
import SupportTicketReplyForm from '../../forms/specificForms/SupportTicketReplyForm'
import ListContainer from '../../list/ListContainer'
import SupportTicketMessageItem from '../../list/listItems/SupportTicketMessageItem'
import ItemDisplayToolbar from '../../ui/toolbars/ItemDisplayToolbar'
import DateDisplay from '../elements/DateDisplay'
import StringDisplay from '../elements/StringDisplay'
import SelectInput from '../../forms/elements/SelectInput'

const statusOptions = ['active', 'closed']

function SupportTicketDisplay({ item }: { item: SupportTicket }) {
  const { supportTicketsStore, uiStore } = useStore()
  const [showForm, setShowForm] = useState(false)

  const renderMessages = () => {
    const reversedList = item?.messages?.slice().reverse()
    return (
      <ListContainer
        list={reversedList}
        ItemComponent={SupportTicketMessageItem}
      />
    )
  }

  const renderToolbar = () => {
    const label = showForm ? 'Hide Form' : 'Reply'
    return (
      <ItemDisplayToolbar>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-outline-primary"
        >
          {label}
        </button>
      </ItemDisplayToolbar>
    )
  }

  const renderForm = () => {
    return (
      <FormContainer>
        <SupportTicketReplyForm itemId={item?._id} setShowForm={setShowForm} />
      </FormContainer>
    )
  }

  const statusChangeHandler = (e) => {
    uiStore.setIsPending()

    const currentSupportTicket = toJS(supportTicketsStore.supportTicket)

    const newSupportTicket = {
      ...currentSupportTicket,
      ticketStatus: e.target.value,
    }

    supportTicketsStore.updateTicket(newSupportTicket)
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
    <>
      <div className="bg-light border rounded-top p-2">
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
      </div>
      <div className="row">
        <div className="col">{renderToolbar()}</div>
      </div>
      {showForm && renderForm()}
      {renderMessages()}
    </>
  )
}

export default observer(SupportTicketDisplay)
