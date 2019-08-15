import React, { memo } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import styled from 'styled-components'

const variants = {
  flat: 'filled',
  outlined: 'outlined'
}

// const StyledInput = styled(({ selfBackgroundColor, textColor, hintColor, ...other }) => <TextField {...other} />)`
//   .MuiInputBase-root {
//     background-color: ${({ selfBackgroundColor }) => (selfBackgroundColor ? selfBackgroundColor : undefined)};
//   }

//   .MuiInputBase-input {
//     color: ${({ textColor }) => (textColor ? textColor : undefined)};
//   }

//   .MuiFormLabel-root {
//     color: ${({ hintColor }) => (hintColor ? `${hintColor} !important` : undefined)};
//   }
// `

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
      self: [{ backgroundColor: selfBackgroundColor }],
      text: [{ underline, color: textColor, ...inputStyle }],
      hint: [{ color: hintColor }],
      error: [{}]
    } = style

    const variant = variants[kind] || 'standard'

    const inputProps = {
      style: !readonly ? inputStyle : undefined,
      disableUnderline: !underline,
      multiline: lines > 1,
      rows: lines,
      inputRef: catchRef,
      endAdornment: isRightIconEnabled ? (
        <InputAdornment position="end">
          <Button
            onPress={rightIconClick}
            disabled={readonly}
            kind="icon"
            icon={rightIcon}
            style={{ self: [{ backgroundColor: textColor }], label: [{}] }}
          />
        </InputAdornment>
      ) : (
        undefined
      )
    }

    if (variant !== 'filled') {
      delete inputProps.disableUnderline
    }

    const hintProps = isFloatingTitle
      ? {
          label: title,
          InputLabelProps: { style: !readonly ? style.hint[0] : undefined }
        }
      : { placeholder: title }

    return (
      <TextField
        id={id}
        key={id}
        value={value}
        disabled={readonly}
        error={!!error}
        InputProps={inputProps}
        variant={variant}
        style={style.self[0]}
        type={inputType}
        {...hintProps}
        {...other}
      />
    )

    // return (
    //   <StyledInput
    //     id={id}
    //     key={id}
    //     value={value}
    //     disabled={readonly}
    //     error={!!error}
    //     InputProps={inputProps}
    //     variant={variant}
    //     style={style.self[0]}
    //     type={inputType}
    //     selfBackgroundColor={selfBackgroundColor}
    //     textColor={textColor}
    //     hintColor={hintColor}
    //     {...hintProps}
    //     {...other}
    //   />
    // )
  }
)

export default {
  type: 'view',
  name: 'input',
  create: ({ button, withViewHOC }) => withViewHOC(Input, { Button: button })
}
