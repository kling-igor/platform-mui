import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const { id = 'image', visibility = true, title = '', mergedStyle, fit = 'contain', click, value } = viewState

  if (!visibility) return null

  return <Component id={id} title={title} style={clone(mergedStyle)} value={value} fit={fit} onClick={click} />
}
