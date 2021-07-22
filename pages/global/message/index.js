import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useStore } from 'src/StoreProvider'
import { useRouter } from 'next/router'

import ListContainer from '@/components/list/ListContainer'
import GlobalMessagesListItem from '@/components/list/listItems/specific/GlobalMessagesListItem'
import FormContainer from '@/components/forms/FormContainer'
import ItemDisplayContainer from '@/components/display/ItemDisplayContainer'
import GlobalMessageDisplay from '@/components/display/specific/GlobalMessageDisplay'
import GlobalMessageForm from '@/components/forms/specificForms/GlobalMessageForm'
import SubToolbarContainer from '@/components/ui/toolbars/subtoolbar/SubToolbarContainer'
import MessageToolbar from '@/components/ui/toolbars/subtoolbar/MessageToolbar'
import { pageModes } from '@/config/globalVariables'
import GlobalMessageAddForm from '@/components/forms/specificForms/GlobalMessageAddForm'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonFunctional from '@/components/ui/buttons/ButtonFunctional'

function Message() {
  const { uiStore, globalMessagesStore } = useStore()
  const { globalMessage, globalMessages } = globalMessagesStore
  const [showAddMessageForm, setShowAddMessageForm] = useState(false)

  const router = useRouter()
  const { itemId, pageMode } = router.query

  useEffect(() => {
    uiStore.setIsPending()
    globalMessagesStore.fetchAll()
  }, [uiStore, globalMessagesStore])

  useEffect(() => {
    if (uiStore.pending || !itemId) return
    globalMessagesStore.setGlobalMessage(itemId)
  }, [itemId, globalMessagesStore.setGlobalMessage, uiStore.pending])

  useEffect(() => {
    setShowAddMessageForm(false)
  }, [pageMode])

  const toggleShowAddMessageForm = () => {
    setShowAddMessageForm(!showAddMessageForm)
  }

  const renderCreate = () => {
    return <FormContainer Component={GlobalMessageForm} pageMode={pageMode} />
  }

  const renderEdit = () => {
    return (
      <>
        <FormContainer
          Component={GlobalMessageForm}
          item={globalMessage}
          pageMode={pageMode}
        />
        {showAddMessageForm
          ? renderAddMessageForm()
          : renderShowAddMessageButton()}
      </>
    )
  }

  const renderAddMessageForm = () => {
    return (
      <>
        <hr />
        <FormContainer
          Component={GlobalMessageAddForm}
          setShowForm={setShowAddMessageForm}
        />
      </>
    )
  }

  const renderShowAddMessageButton = () => {
    return (
      <>
        <hr />
        <ButtonContainer
          Component={ButtonFunctional}
          label={'Add Message'}
          variant={'primary'}
          isOutline
          onClick={toggleShowAddMessageForm}
        />
      </>
    )
  }

  const renderView = () => {
    return (
      <>
        <ItemDisplayContainer>
          <GlobalMessageDisplay item={globalMessage} />
        </ItemDisplayContainer>
        <hr />
        {showAddMessageForm
          ? renderAddMessageForm()
          : renderShowAddMessageButton()}
      </>
    )
  }

  const renderAll = () => {
    return (
      <ListContainer
        list={globalMessages}
        ItemComponent={GlobalMessagesListItem}
      />
    )
  }

  const renderOnPageMode = () => {
    switch (pageMode) {
      case pageModes.ALL:
        return renderAll()
      case pageModes.VIEW:
        return renderView()
      case pageModes.CREATE:
        return renderCreate()
      case pageModes.EDIT:
        return renderEdit()
      default:
        return 'no components for page to render'
    }
  }

  return (
    <>
      <SubToolbarContainer>
        <MessageToolbar itemId={globalMessage._id} pageMode={pageMode} />
      </SubToolbarContainer>
      {renderOnPageMode()}
    </>
  )
}

export default observer(Message)
