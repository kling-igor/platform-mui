import React, { memo } from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import MaterialRadioGroup from '@material-ui/core/RadioGroup'

const placements = {
  start: 'end',
  end: 'start'
}

const labelPlacement = iconPlacement => placements[iconPlacement] || 'start'

// контейнер для компенсации отрицательных границ, получаемых при расположении лейбла после радиокнопки
const RowStyle = styled.div`
  margin-left: ${({ labelPlacement }) => (labelPlacement === 'start' ? '0px' : '11px')};
  margin-right: 0px;
`

const RadioGroupItem = memo(({ item, checked, labelPlacement, disabled }) => {
  const { id, title, value } = item

  return (
    <RowStyle labelPlacement={labelPlacement}>
      <FormControlLabel
        id={id}
        value={id}
        control={
          <Radio
            checked={checked}
            value={value}
            disabled={disabled}
            color="default"
            // icon={<RadioButtonUncheckedIcon fontSize="small" />}
            // checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
          />
        }
        label={<span style={{ color: 'red' }}>{title}</span>}
        labelPlacement={labelPlacement}
      />
    </RowStyle>
  )
})

const onSelect = (onSelectFunc, data) => event => onSelectFunc(data.find(item => item.id === event.target.value))

const RadioGroup = Icon =>
  memo(({ id, data, value, readonly, orientation, iconPlacement, onSelectFunc, style, activeStyle, disabledStyle }) => {
    return (
      <MaterialRadioGroup
        id={id}
        name={id}
        value={(value && value.id) || -1}
        onChange={onSelect(onSelectFunc, data)}
        row={orientation === 'horizontal'}
      >
        {data.map(item => (
          <RadioGroupItem
            key={item.id}
            item={item}
            disabled={readonly}
            checked={value && value.id === item.id}
            labelPlacement={labelPlacement(iconPlacement)}
          />
        ))}
      </MaterialRadioGroup>
    )
  })

export default {
  type: 'view',
  name: 'radiogroup',
  create: ({ icon }) => RadioGroup(icon)
}
