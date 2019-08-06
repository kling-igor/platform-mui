import React, { memo, useState } from 'react'
import 'moment/locale/ru'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import moment from 'moment'

const handleDate = onChange => date => onChange(date.toDate())

const DateTime = memo(({ id, locale = 'ru-RU', onChange, value = Date.now(), Icon }) => {
  moment.locale(locale)
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={locale} moment={moment}>
      {/* <KeyboardDatePicker
        margin="normal"
        id={id}
        label="Date picker"
        value={value}
        onChange={handleDate(onChange)}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      /> */}
      <KeyboardTimePicker
        margin="normal"
        id="mui-pickers-time"
        label="Time picker"
        value={value}
        onChange={handleDate(onChange)}
        KeyboardButtonProps={{
          'aria-label': 'change time'
        }}
      />
    </MuiPickersUtilsProvider>
  )
})

export default {
  type: 'view',
  name: 'datetime',
  create: ({ icon, withViewHOC }) => withViewHOC(DateTime, { Icon: icon })
}
