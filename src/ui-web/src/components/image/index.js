import React, { memo } from 'react'
import placeholder from './placeholder'

const Image = memo(({ id, value, title, style, fit, onClick }) => {
  const {
    self: [{ width, height, ...rest }]
  } = style

  return (
    <div key={id} style={{ width, height }} onClick={onClick} role="presentation">
      <img
        src={value || placeholder}
        alt={title}
        title={title}
        id={id}
        style={{
          ...rest,
          height: '100%',
          width: '100%',
          objectFit: fit
        }}
      />
    </div>
  )
})

export default {
  type: 'view',
  name: 'image',
  create: () => Image
}
