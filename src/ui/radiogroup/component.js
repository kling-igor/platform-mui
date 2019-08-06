import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'radiogroup',
    visibility = true,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    readonly,
    onSelectFunc,
    data,
    value,
    orientation,
    iconPlacement
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      orientation={orientation}
      iconPlacement={iconPlacement}
      readonly={readonly}
      data={data}
      value={value}
      onSelectFunc={onSelectFunc}
    />
  )
}
