import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    visibility,
    stickyHeaders,
    itemTemplate,
    itemBindRule,
    headerTemplate,
    headerBindRule,
    renderItem,
    renderHeader,
    data,
    mergedStyle,
    onItemClickAction,
    onRefresh,
    onEndReached,
    isRefreshing
  } = viewState

  if (
    !visibility ||
    (itemTemplate && !itemBindRule) ||
    (headerTemplate && !headerBindRule) ||
    !data ||
    data.length === 0
  )
    return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      stickyHeaders={stickyHeaders}
      onItemClickAction={onItemClickAction}
      data={data}
      renderItem={itemBindRule && itemTemplate && renderItem}
      renderHeader={headerBindRule && headerTemplate && renderHeader}
      onRefresh={onRefresh}
      isRefreshing={isRefreshing}
      onEndReached={onEndReached}
    />
  )
}
