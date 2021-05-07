import React from 'react'

function ListItemContainer({ item, ListItemComponent }) {
  return (
    <div>
      <ListItemComponent item={item} />
    </div>
  )
}

export default ListItemContainer
