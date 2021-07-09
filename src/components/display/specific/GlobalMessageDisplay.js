import ListContainer from '@/components/list/ListContainer'
import StringDisplay from '@/components/display/elements/StringDisplay'
import GlobalMessageListItem from '@/components/list/listItems/specific/GlobalMessageListItem'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'
import { pageModes } from '@/config/globalVariables'
import DateDisplay from '@/components/display/elements/DateDisplay'

function GlobalMessageDisplay({ item }) {
  return (
    <div>
      <StringDisplay content={item._id} />
      <DateDisplay date={item.createdAt} />
      <StringDisplay content={item.from} />
      <StringDisplay content={item.subject} />
      <ListContainer
        ItemComponent={GlobalMessageListItem}
        list={item.messages}
      />
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        label={'Edit'}
        pathname={'/global/message'}
        query={{ pageMode: pageModes.EDIT, itemId: item._id }}
      />
    </div>
  )
}

export default GlobalMessageDisplay
