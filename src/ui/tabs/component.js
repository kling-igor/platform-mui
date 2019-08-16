import React from 'react'
import { clone } from 'ramda'

export default (Component, renderChildScreen) => ({ viewState }) => {
  const {
    id = 'label',
    visibility = true,
    mergedStyle,
    selectedTab,
    elements,
    scrollable,
    internalChange,
    renderTab = screen => renderChildScreen(screen, null, /*this.screenId*/ null)
  } = viewState

  if (!visibility || elements.length === 0) return null

  return (
    <Component
      id={id}
      tabs={elements.map(element => ({
        visibility: true,
        ...element,
        screen: renderTab(element.screen)
      }))}
      // selectedTab={selectedTab}
      style={clone(mergedStyle)}
      scrollable={scrollable}
      // onTabChanged={internalChange}
    />
  )
}
