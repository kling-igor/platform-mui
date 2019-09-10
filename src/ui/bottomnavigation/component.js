import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'bottomnavigation',
    visibility = true,
    mergedStyle,
    readonly,
    selectedTab,
    elements,
    internalChange
  } = viewState

  if (!visibility || elements.length === 0) return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      readonly={readonly}
      selectedTab={selectedTab}
      tabs={elements}
      onTabChanged={internalChange}
    />
  )
}
