import React, { memo } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const variants = {
  flat: 'filled',
  outlined: 'outlined'
}

const Input = memo(
  ({
    id,
    title,
    style,
    activeStyle,
    disabledStyle,
    value,
    lines,
    inputType, // default, numeric->text, password
    readonly,
    error,
    returnKeyType,
    isFloatingTitle,
    kind, // flat->filled, outlined, standard
    isRightIconEnabled,
    rightIcon,
    rightIconClick,
    catchRef,
    Button,
    ...other
  }) => {
    const {
      text: [{ underline, ...inputStyle }]
    } = style

    const inputProps = {
      style: !readonly ? inputStyle : undefined,
      disableUnderline: !underline,
      endAdornment: isRightIconEnabled ? (
        <InputAdornment position="end">
          <Button onPress={rightIconClick} disabled={readonly} kind="icon" icon={rightIcon} />
          {/* <IconButton onClick={rightIconClick} disabled={readonly}>
            <Icon id={`${id}.right_icon`} icon={rightIcon} color={inputStyle.color} />
          </IconButton> */}
        </InputAdornment>
      ) : (
        undefined
      )
    }

    const hintProps = isFloatingTitle
      ? {
          label: title,
          InputLabelProps: { style: !readonly ? style.hint[0] : undefined }
        }
      : { placeholder: title }

    const variant = variants[kind] || 'standard'

    return (
      <TextField
        id={id}
        key={id}
        value={value}
        disabled={readonly}
        error={!!error}
        InputProps={inputProps}
        variant={variant}
        {...hintProps}
        {...other}
      />
    )
  }
)

export default {
  type: 'view',
  name: 'input',
  create: ({ button, withViewHOC }) => withViewHOC(Input, { Button: button })
}
