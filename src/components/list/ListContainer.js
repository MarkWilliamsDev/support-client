import ItemContainer from './listItems/ItemContainer'

function ListContainer({ list, ItemComponent, onItemSelect }) {
  const renderItemComponent = (item) => {
    return <ItemComponent item={item} onItemSelect={onItemSelect} />
  }

  const renderList = () => {
    if (list.length) {
      return list.map((item) => {
        return (
          <ItemContainer key={item._id}>
            {renderItemComponent(item)}
          </ItemContainer>
        )
      })
    }
  }

  return <div className="container">{renderList()}</div>
}

export default ListContainer
