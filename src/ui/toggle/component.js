import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'toggle',
    visibility = true,
    title,
    value,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    iconPlacement,
    onChangeFunc,
    readonly
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      title={title}
      value={value}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      iconPlacement={iconPlacement}
      onChange={onChangeFunc}
      readonly={readonly}
    />
  )
}
