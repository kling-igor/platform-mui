import React, { memo } from 'react'
import FontIcon from '@material-ui/core/Icon'
import styled from 'styled-components'

// const noop = () => {}

// const clickImpl = (click, stopPropagation = false) => event => {
//   if (stopPropagation) {
//     if (event.preventDefault) {
//       event.preventDefault()
//     }
//     if (event.stopPropagation) {
//       event.stopPropagation()
//     }
//   }
//   click && click()
// }

const Icon = memo(
  ({
    id,
    icon,
    kind = 'icon',
    color = '#fff',
    size = 24,
    /*onClick = noop,*/ Image,
    stopPropagation,
    ...restProps
  }) => {
    if (!icon) return null

    if (kind === 'image') {
      return <Image id={id} value={icon} style={{ self: [{ width: size, height: size }] }} {...restProps} />
    }

    return (
      <FontIcon
        id={id}
        // onClick={onClick && clickImpl(onClick, stopPropagation)}
        color="inherit"
        style={{ fontSize: size, color, display: 'flex', alignItems: 'center' }}
      >
        {icon}
      </FontIcon>
    )
  }
)

export default {
  type: 'view',
  name: 'icon',
  create: ({ image, withViewHOC }) => withViewHOC(Icon, { Image: image })
}
