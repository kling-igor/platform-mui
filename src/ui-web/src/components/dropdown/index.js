import React, { memo, useMemo, useRef, useState, useEffect } from 'react'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'

import styled from 'styled-components'
const noop = () => {}

const variants = {
  flat: 'filled',
  outlined: 'outlined'
}

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
    const inputLabel = useRef(null)
    const [labelWidth, setLabelWidth] = useState(0)
    useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth)
    }, [])

    const handleChange = event => {
      selectItem(event.target.value)
    }

    // const input =
    //   kind === 'flat' ? (
    //     <FilledInput name="age" id="filled-age-simple" />
    //   ) : (
    //     <OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />
    //   )

    const renderValue = value => (value && (value.title || value.value)) || ''

    return (
      <FormControl disabled={readonly} error={!!error}>
        <InputLabel shrink ref={inputLabel}>
          {title}
        </InputLabel>
        <Select
          value={value}
          autoWidth={false}
          onChange={handleChange}
          renderValue={renderValue}
          displayEmpty
          variant={variants[kind] || 'standard'}
        >
          {data.map(item => (
            <MenuItem key={item.id} value={item.value}>
              {item.title || item.value}
            </MenuItem>
          ))}
        </Select>
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    )
  }
)

export default {
  type: 'view',
  name: 'dropdown',
  create: () => Dropdown
}
