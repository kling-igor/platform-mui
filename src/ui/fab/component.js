import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'fab',
    visibility = true,
    icon = 'plus',
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    readonly,
    onPress
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      icon={icon}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      readonly={readonly}
      // onPress={onPress} // нет нужды передавать обработчик
    />
  )
}
