import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'appbar',
    visibility = true,
    leftIcon,
    title,
    menuIcon,
    mergedStyle,
    leftClick,
    menuItemClick,
    hasTabs,
    elements,
    isSearching,
    value,
    hint,
    changeValue,
    submitValue,
    clearValue
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      leftIcon={leftIcon}
      menuIcon={menuIcon}
      title={title}
      style={clone(mergedStyle)}
      leftClick={leftClick}
      menuItemClick={menuItemClick}
      hasTabs={hasTabs}
      menuItems={elements}
      isSearching={isSearching}
      value={value}
      hint={hint}
      changeValue={changeValue}
      submitValue={submitValue}
      clearValue={clearValue}
    />
  )
}
