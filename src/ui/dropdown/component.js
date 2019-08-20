import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id,
    visibility,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    title,
    isFloatingTitle,
    readonly,
    error,
    isSuggestionsOpened,
    kind,
    data,
    value
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      title={title}
      isFloatingTitle={isFloatingTitle}
      readonly={readonly}
      error={error}
      kind={kind}
      data={data}
      value={value}
      isSuggestionsOpened={isSuggestionsOpened}
    />
  )
}
