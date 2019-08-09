import React, { memo, useState } from 'react'
import 'moment/locale/ru'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import moment from 'moment'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import time from './timepicker'
import date from './datepicker'
import datetime from './datetimepicker'

const pickers = {
  time,
  date,
  datetime
}

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#29A634'
    }
  }
})

const handleDate = onChange => date => onChange(date.toDate())

const DateTime = memo(
  ({
    id,
    displayType,
    locale = 'ru-RU',
    onChange,
    value = Date.now(),
    minDate,
    maxDate,
    format,
    title,
    okLabel,
    cancelLabel,
    style,
    readonly,
    extendedSettings,
    Icon
  }) => {
    const Picker = pickers[displayType]

    moment.locale(locale)
    return (
      <ThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale={locale} moment={moment}>
          <Picker
            id={id}
            locale={locale}
            value={value}
            minDate={minDate || moment('19700101').format('YYYYMMDD')}
            maxDate={maxDate || moment('21000101').format('YYYYMMDD')}
            format={format}
            onChange={handleDate(onChange)}
            label={title}
            okLabel={<span style={Object.assign({}, ...style.okLabel)}>{okLabel}</span>}
            cancelLabel={<span style={Object.assign({}, ...style.cancelLabel)}>{cancelLabel}</span>}
            invalidLabel=""
            disabled={readonly}
            {...extendedSettings}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    )
  }
)

export default {
  type: 'view',
  name: 'datetime',
  create: ({ icon, withViewHOC }) => withViewHOC(DateTime, { Icon: icon })
}
