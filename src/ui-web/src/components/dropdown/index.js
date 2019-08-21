import React, { memo, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
const noop = () => {}

const renderValue = value => (value && (value.title || value.value)) || ''

const useStyles = makeStyles({
  self: style => style.self[0],
  error: style => style.error[0],
  text: style => style.text[0],
  poper: style => style.list[0],
  list: style => ({ paddingTop: 0, paddingBottom: 0 }),
  listItemTitle: style => style.listItemTitle[0],
  listItem: style => style.listItem[0],
  listItemHovered: {
    '&:hover': {
      backgroundColor: '#f0f'
    }
  }
})

const Dropdown = memo(
  ({
    id,
    style,
    activeStyle,
    disabledStyle,
    title,
    isFloatingTitle,
    readonly,
    error,
    kind,
    data,
    value = '',
    isSuggestionsOpened,
    selectItem = () => {}
  }) => {
    const classes = useStyles(style)

    const inputLabel = useRef(null)
    const [labelWidth, setLabelWidth] = useState(0)
    useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth)
    }, [])

    const handleChange = useCallback(
      event => {
        selectItem(event.target.value)
      },
      [selectItem]
    )

    const input = useMemo(() => {
      if (kind === 'flat') {
        return <FilledInput className={classes.text} />
      }

      return <OutlinedInput className={classes.text} labelWidth={labelWidth} />
    }, [kind, labelWidth])

    return (
      <FormControl id={id} disabled={readonly} error={!!error} className={classes.self}>
        <InputLabel shrink ref={inputLabel}>
          {title}
        </InputLabel>
        <Select
          open={isSuggestionsOpened}
          value={value}
          autoWidth={false}
          onChange={handleChange}
          renderValue={renderValue}
          displayEmpty
          input={input}
          MenuProps={{ classes: { paper: classes.poper, list: classes.list } }}
        >
          {data.map(item => (
            <MenuItem
              key={item.id}
              value={item.value}
              className={`${classes.listItem} ${classes.listItemHovered}`}
              dense
            >
              <span className={`${classes.listItemTitle}`}>{item.title || item.value}</span>
            </MenuItem>
          ))}
        </Select>
        {!!error && <FormHelperText style={style.error[0]}>{error}</FormHelperText>}
      </FormControl>
    )
  }
)

export default {
  type: 'view',
  name: 'dropdown',
  create: () => Dropdown
}
