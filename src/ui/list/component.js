import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'radiogroup',
    visibility = true,
    itemTemplate,
    itemBindRule,
    renderItem,
    data,
    orientation,
    columns,
    mergedStyle,
    onItemClickAction,
    onRefresh,
    onEndReached,
    isRefreshing,
    disableVirtualization
  } = viewState

  if (!visibility || (itemTemplate && !itemBindRule) || !data || data.length === 0) return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      onItemClickAction={onItemClickAction}
      orientation={orientation}
      data={data}
      renderItem={itemBindRule && itemTemplate && renderItem}
      onRefresh={onRefresh}
      isRefreshing={isRefreshing}
      onEndReached={onEndReached}
      columns={columns}
      disableVirtualization={disableVirtualization}
    />
  )
}
