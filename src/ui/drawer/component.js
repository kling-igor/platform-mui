import React from 'react'

export default Component => ({ viewState }) => {
  const { isOpen, onChange, contentScreen, contentParams, menuScreen, renderScreen } = viewState

  if (!menuScreen || !contentScreen) return null

  return (
    <Component
      id={id}
      menu={renderScreen(menuScreen, null)}
      content={renderScreen(contentScreen, contentParams)}
      open={isOpen}
      onChange={onChange}
    />
  )
}
