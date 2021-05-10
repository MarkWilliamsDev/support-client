import { SupportTicket, ListContainerProps } from 'apiTypes'
import ItemContainer from './listItems/ItemContainer'

function ListContainer({
  list,
  ItemComponent,
  onItemSelect,
}: ListContainerProps) {
  const renderItemComponent = (item: SupportTicket) => {
    return <ItemComponent item={item} onItemSelect={onItemSelect} />
  }

  const renderList = () => {
    return list?.map((item) => {
      return (
        <ItemContainer key={item._id}>
          {renderItemComponent(item)}
        </ItemContainer>
      )
    })
  }

  return <div className="container">{renderList()}</div>
}

export default ListContainer
