import ListItemContainer from '../listItems/ListItemContainer'

function ListContainer({ list, ListItemComponent }) {
  const renderList = () => {
    return list.map((item) => {
      return (
        <ListItemContainer
          key={item._id}
          item={item}
          ListItemComponent={ListItemComponent}
        />
      )
    })
  }

  return <div>{renderList()}</div>
}

export default ListContainer
