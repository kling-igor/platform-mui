import React, { memo } from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import MaterialRadioGroup from '@material-ui/core/RadioGroup'

const RadioGroupItem = memo((item, onClick) => {
  const { id, title, value } = item

  return (
    <FormControlLabel
      value="top"
      control={
        <Radio
          checked={true}
          onChange={onClick}
          value={value}
          color="default"
          name="radio-button-demo"
          // inputProps={{ 'aria-label': 'E' }}
          // icon={<RadioButtonUncheckedIcon fontSize="small" />}
          // checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        />
      }
      label={title}
      labelPlacement="end"
    />
  )
})

const RadioGroup = Icon =>
  memo(({ id, data, value, orientation }) => {
    return (
      <MaterialRadioGroup aria-label="position" name="" value={null} onChange={() => {}} row={false}>
        {data.map(item => (
          <RadioGroupItem item={item} onClick={() => {}} />
        ))}
      </MaterialRadioGroup>
    )
  })

export default {
  type: 'view',
  name: 'radiogroup',
  create: ({ icon }) => RadioGroup(icon)
}
