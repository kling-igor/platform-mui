import React, { memo, useMemo } from 'react'
import MaterialList from '@material-ui/core/List'

const orientationStyle = {
  vertical: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  }
}

const renderItemCallback = (item, index, sectionId, renderItem) => () => renderItem(item, index, sectionId)

const onItemClick = (item, selectItem) => event => {
  if (event.preventDefault) {
    event.preventDefault()
  }
  if (event.stopPropagation) {
    event.stopPropagation() // W3C model
  }
  selectItem(item)
}

const defaultStyle = {
  self: [],
  listItem: {
    self: [],
    title: []
  }
}

const List = memo(
  ({
    id,
    style = defaultStyle,
    renderItem,
    selectItem,
    data = [],
    orientation = 'vertical',
    sectionId,
    readonly: disabled = false,
    children = null,
    ListItem
  }) => {
    const listStyle = useMemo(
      () => Object.assign({ display: 'flex', overflow: 'auto' }, orientationStyle[orientation], style.self[0]),
      [orientation, style]
    )

    return (
      <MaterialList id={id} style={listStyle}>
        {data.length === 0
          ? children
          : data.map((item, index) => (
              <ListItem
                key={item.id}
                item={item}
                style={style.listItem}
                disabled={disabled}
                onClick={selectItem && onItemClick(item, selectItem)}
                renderItem={renderItem && renderItemCallback(item, index, sectionId, renderItem)}
              />
            ))}
      </MaterialList>
    )
  }
)

export default {
  type: 'view',
  name: 'list',
  create: ({ listitem, withViewHOC }) => withViewHOC(List, { ListItem: listitem })
}
