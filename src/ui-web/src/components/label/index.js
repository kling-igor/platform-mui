import React, { memo, useCallback } from 'react'

import Formula from './formula'

const Label = memo(({ id, value, align, style, onPress, title, displayType }) => {
  const clickHandler = useCallback(event => {
    if (event.preventDefault) {
      event.preventDefault()
    }
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    onPress && onPress()
  })

  if (displayType === 'formula') {
    return <Formula id={id} click={clickHandler} value={value} align={align} style={style} />
  }

  return (
    // eslint-disable-next-line
    <span
      onClick={clickHandler}
      role="presentation"
      title={title}
      style={Object.assign({}, ...style.self, { display: 'inline-block', textAlign: align })}
      id={id}
      key={id}
    >
      {value}
    </span>
  )
})

export default {
  type: 'view',
  name: 'label',
  create: () => Label
}
