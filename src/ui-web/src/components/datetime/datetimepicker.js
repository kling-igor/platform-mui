import React, { memo } from 'react'
import { DateTimePicker as MaterialDateTimePicker } from '@material-ui/pickers'

const DateTimePicker = memo(props => {
  return <MaterialDateTimePicker ampm={false} {...props} />
})

export default DateTimePicker
