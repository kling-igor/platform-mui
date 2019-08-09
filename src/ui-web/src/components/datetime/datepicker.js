// import React, { memo, useState } from 'react'

// import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'

// const handleDate = onChange => date => onChange(date.toDate())

// const DateTime = memo(({ id, locale = 'ru-RU' }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))

//   moment.locale(locale)
//   return (
//     <MuiPickersUtilsProvider utils={MomentUtils} locale={locale} moment={moment}>
//       <KeyboardDatePicker
//         margin="normal"
//         id={id}
//         label="Date picker"
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//           'aria-label': 'change date'
//         }}
//       />
//     </MuiPickersUtilsProvider>
//   )
// })

import React, { memo } from 'react'
import { DatePicker as MaterialDatePicker } from '@material-ui/pickers'

const DatePicker = memo(props => {
  return <MaterialDatePicker {...props} />
})

export default DatePicker
