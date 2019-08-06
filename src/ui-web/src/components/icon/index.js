import React, { memo } from 'react'
import FontIcon from '@material-ui/core/Icon'

const clickImpl = (click, stopPropagation = false) => event => {
  if (stopPropagation) {
    if (event.preventDefault) {
      event.preventDefault()
    }
    if (event.stopPropagation) {
      event.stopPropagation()
    }
  }
  click && click()
}

const Icon = memo(({ id, icon, color, size, onClick, stopPropagation }) => {
  if (!icon) return null
  return (
    <FontIcon
      id={id}
      onClick={onClick && clickImpl(onClick, stopPropagation)}
      // className={`mdi mdi-${icon.replace('_', '-')}`}
      color="inherit"
      style={{ fontSize: size, color, display: 'flex', alignItems: 'center' }}
    >
      {icon}
    </FontIcon>
  )
})

export default {
  type: 'view',
  name: 'icon',
  create: () => Icon
}
