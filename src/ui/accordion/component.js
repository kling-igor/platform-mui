import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState, children }) => {
  const {
    id = 'accordion',
    title,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    readonly,
    visibility,
    expanded,
    toggle,
    leftIcon,
    rightIcon
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      title={title}
      expanded={expanded}
      disabled={readonly}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      toggle={toggle}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {children}
    </Component>
  )
}
