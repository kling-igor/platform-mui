import React, { memo } from 'react'
import MaterialListItem from '@material-ui/core/ListItem'

const defaultStyle = {
  self: [],
  title: []
}

const ListItem = memo(({ item, style = defaultStyle, onClick, renderItem, disabled = false, Label }) => {
  const { id: itemId, title, value } = item
  return (
    <MaterialListItem id={itemId} button={!!onClick} style={style.self[0]} onClick={onClick} disabled={disabled}>
      {renderItem ? (
        renderItem()
      ) : (
        <Label id={`default_label_${itemId}`} value={title || value} style={{ self: style.title }} />
      )}
    </MaterialListItem>
  )
})

export default {
  type: 'view',
  name: 'listitem',
  create: ({ label, withViewHOC }) => withViewHOC(ListItem, { Label: label })
}
