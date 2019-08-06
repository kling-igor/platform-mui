import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'button',
    visibility = true,
    title = 'Button',
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    kind,
    loading,
    readonly,
    icon,
    onPress
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      title={title}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      kind={kind}
      loading={loading}
      disabled={readonly}
      icon={icon}
      // onPress={onPress} // нет нужды передавать обработчик
    />
  )
}
