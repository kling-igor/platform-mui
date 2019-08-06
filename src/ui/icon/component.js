import React from 'react'

export default Component => ({ viewState }) => {
  const { id = 'icon', visibility = true, value, color, size, click } = viewState

  if (!visibility) return null

  return <Component id={id} icon={value} color={color} size={size} onClick={click} />
}
