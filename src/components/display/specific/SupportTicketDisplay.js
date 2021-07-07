import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import FormContainer from '@/components/forms/FormContainer'
import SupportTicketReplyForm from '@/components/forms/specificForms/SupportTicketReplyForm'
import ListContainer from '@/components/list/ListContainer'
import SupportTicketMessageItem from '@/components/list/listItems/specific/SupportTicketMessageItem'
import ItemDisplayToolbar from '@/components/ui/toolbars/ItemDisplayToolbar'
import InfoHeaderContainer from '@/components/headers/InfoHeader/InfoHeaderContainer'
import SupportTicketInfoHeader from '@/components/headers/InfoHeader/SupportTicketInfoHeader'

function SupportTicketDisplay({ item }) {
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
      <FormContainer
        Component={SupportTicketReplyForm}
        item={item}
        setShowForm={setShowForm}
      />
    )
  }

  return (
    <>
      <InfoHeaderContainer>
        <SupportTicketInfoHeader item={item} />
      </InfoHeaderContainer>
      <div className="row">
        <div className="col">{renderToolbar()}</div>
      </div>
      {showForm && renderForm()}
      {renderMessages()}
    </>
  )
}

export default observer(SupportTicketDisplay)
