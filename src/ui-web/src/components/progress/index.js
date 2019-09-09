import React, { memo } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Progress = memo(({ id, color = '#333', size = 40 }) => <CircularProgress id={id} style={{ color }} size={size} />)

export default {
  type: 'view',
  name: 'progress',
  create: () => Progress
}
