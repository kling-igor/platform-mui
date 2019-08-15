import React from 'react'
import { clone } from 'ramda'

export default (Component, parseFormula) => ({ viewState }) => {
  const { id = 'label', visibility = true, value, align, mergedStyle, click, title, displayType } = viewState

  if (!visibility) return null

  const actualValue = displayType === 'formula' ? parseFormula(value) : value

  return (
    <Component
      id={id}
      value={actualValue}
      align={align}
      style={clone(mergedStyle)}
      // onPress={click}
      title={title}
      displayType={displayType}
    />
  )
}
