import { SupportTicket } from 'apiTypes'
import { ComponentType } from 'react'
import ItemContainer from './listItems/ItemContainer'

type ItemComponentProps = {
  item: SupportTicket
}

type ListContainerProps = {
  list: SupportTicket[]
  ItemComponent: ComponentType<ItemComponentProps>
}

function ListContainer({ list, ItemComponent }: ListContainerProps) {
  const renderItemComponent = (item: SupportTicket) => {
    return <ItemComponent item={item} />
  }

  const renderList = () => {
    return list.map((item) => {
      return (
        <ItemContainer key={item._id}>
          {renderItemComponent(item)}
        </ItemContainer>
      )
    })
  }

  return <div>{renderList()}</div>
}

export default ListContainer
