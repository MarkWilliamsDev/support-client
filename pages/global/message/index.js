import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
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

function Messages() {
  const { uiStore, globalMessagesStore } = useStore()
  const { globalMessage, globalMessages } = globalMessagesStore

  const router = useRouter()
  const { itemId, pageMode } = router.query

  useEffect(() => {
    uiStore.setIsPending()
    globalMessagesStore.fetchAll()
  }, [uiStore, globalMessagesStore])

  useEffect(() => {
    if (uiStore.pending) return
    if (!itemId) return
    globalMessagesStore.setGlobalMessage(itemId)
  }, [itemId, globalMessagesStore.setGlobalMessage, uiStore.pending])

  const renderGlobalMessageForm = () => {
    return pageMode === pageModes.CREATE ? (
      <FormContainer Component={GlobalMessageForm} />
    ) : (
      <FormContainer Component={GlobalMessageForm} />
    )
  }

  const renderGlobalMessageDisplay = () => {
    return (
      <ItemDisplayContainer>
        <GlobalMessageDisplay item={globalMessage} />
      </ItemDisplayContainer>
    )
  }

  const renderGlobalMessagesList = () => {
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
        return renderGlobalMessagesList()
      case pageModes.VIEW:
        return renderGlobalMessageDisplay()
      case pageModes.CREATE:
        return renderGlobalMessageForm()
      case pageModes.EDIT:
        return renderGlobalMessageForm()
      default:
        return 'no components for page to render'
    }
  }

  return (
    <>
      <SubToolbarContainer>
        <MessageToolbar />
      </SubToolbarContainer>
      {renderOnPageMode()}
    </>
  )
}

export default observer(Messages)
