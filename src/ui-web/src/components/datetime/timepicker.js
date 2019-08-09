import React, { memo } from 'react'
import { TimePicker as MaterialTimePicker } from '@material-ui/pickers'

const TimePicker = memo(props => {
  return <MaterialTimePicker ampm={false} {...props} />
})

export default TimePicker
