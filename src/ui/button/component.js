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
    icon: iconName
  } = viewState

  if (!visibility || !mergedStyle) return null

  const icon = iconName ? icon : undefined

  return (
    <Component
      id={id}
      title={title}
      style={clone(mergedStyle)}
      activeStyle={mergedActiveStyle}
      disabledStyle={mergedDisabledStyle}
      kind={kind}
      loading={loading}
      disabled={readonly}
      icon={icon}
    />
  )
}
