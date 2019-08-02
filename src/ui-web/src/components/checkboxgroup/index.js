import React, { memo } from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MaterialCheckbox from '@material-ui/core/Checkbox'

const flexDirection = {
  horizontal: 'row',
  vertical: 'column'
}

const RootStyle = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) => flexDirection[orientation]};
`

const CheckboxGroup = Checkbox =>
  memo(
    ({
      id,
      data,
      value,
      orientation,
      onSelectFunc,
      iconPlacement,
      readonly,
      style,
      activeStyle = {},
      disabledStyle = {}
    }) => {
      const checkboxStyle = {
        self: style.listItem,
        title: style.listItemTitle,
        icon: style.listItemIcon
      }
      const checkboxActiveStyle = {
        self: activeStyle.listItem,
        title: activeStyle.listItemTitle,
        icon: activeStyle.listItemIcon
      }
      const checkboxDisabledStyle = {
        self: disabledStyle.listItem,
        title: disabledStyle.listItemTitle,
        icon: disabledStyle.listItemIcon
      }

      const isChecked = item => !!value.find(selectedItem => selectedItem.id === item.id)
      const onChange = item => () =>
        onSelectFunc(!isChecked(item) ? [...value, item] : value.filter(selectedItem => selectedItem.id !== item.id))

      return (
        <RootStyle id={id} orientation={orientation} style={style.self[0]}>
          {data.map(item => {
            return (
              <Checkbox
                id={`${id}.listitem.${item.id}`}
                key={item.id}
                title={item.title || item.value}
                value={isChecked(item)}
                readonly={readonly}
                iconPlacement={iconPlacement}
                style={checkboxStyle}
                activeStyle={checkboxActiveStyle}
                disabledStyle={checkboxDisabledStyle}
                onChange={onChange(item)}
              />
            )
          })}
        </RootStyle>
      )
    }
  )

export default {
  type: 'view',
  name: 'checkboxgroup',
  create: ({ checkbox }) => CheckboxGroup(checkbox)
}
