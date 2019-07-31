import React, { memo } from 'react'
import MaterialButton from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import CustomButton from './custom'
import CircularProgress from './circular-progress'

const clickImpl = (click, stopPropagation = false) => event => {
  if (stopPropagation) {
    if (event.preventDefault) {
      event.preventDefault()
    }
    if (event.stopPropagation) {
      event.stopPropagation()
    }
  }
  click && click()
}

const StyledButton = withTheme(
  withStyles({
    // Styles applied to the root element
    root: {
      width: ({ width }) => width,
      height: ({ height }) => height
    },

    // Styles applied to the span element that wraps the children
    label: {
      color: ({ color, disabled }) => (disabled ? null : color)
    },

    //Styles applied to the root element if variant="text"
    text: {
      // define attrs for variant="text" here
    },

    // Styles applied to the root element if variant="outlined"
    outlined: {
      borderColor: ({ backgroundColor }) => backgroundColor
    },

    // Styles applied to the root element if variant="contained"
    contained: {
      backgroundColor: ({ backgroundColor }) => backgroundColor,
      '&:hover': {
        backgroundColor: ({ backgroundColor }) => backgroundColor,
        filter: 'brightness(85%)'
      }
    },

    // pseudo-class applied to the root element if disabled={true}
    disabled: {
      // define attrs for disabled state here
    }
  })(({ classes, theme, width, height, backgroundColor, color, ...other }) => (
    <MaterialButton classes={classes} {...other} />
  ))
)

const StyledIconButton = withTheme(
  withStyles({
    // Styles applied to the root element
    root: {},

    // Styles applied to the span element that wraps the children
    label: {
      color: ({ color, disabled }) => (disabled ? null : color)
    },

    // pseudo-class applied to the root element if disabled={true}
    disabled: {
      // define attrs for disabled state here
    }
  })(({ classes, theme, color, ...other }) => <IconButton classes={classes} {...other} />)
)

const Button = memo(
  ({
    id,
    title,
    onPress,
    kind,
    loading,
    disabled,
    style,
    activeStyle = {},
    disabledStyle = {},
    icon,
    stopPropagation
  }) => {
    const onClick = disabled ? null : clickImpl(onPress, stopPropagation)

    const { self: [{ width, height, backgroundColor }] = [{}], label: [{ color }] = [{}] } = style

    const size = height ? height - 8 : 16

    if (kind === 'text' || kind === 'contained' || kind === 'outlined') {
      return (
        <StyledButton
          id={id}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          color={color}
          onClick={onClick}
          disabled={disabled}
          variant={kind}
        >
          {!!icon && loading !== true && <Icon>{icon}</Icon>}
          {!!loading && <CircularProgress size={size} color={disabled ? 'inherited' : color} />}
          {title}
        </StyledButton>
      )
    }

    if (kind === 'icon' && icon) {
      return (
        <StyledIconButton id={id} color={color} onClick={onClick} disabled={disabled}>
          <Icon>{icon}</Icon>
        </StyledIconButton>
      )
    }

    return (
      <CustomButton
        title={title}
        icon={icon}
        loading={loading}
        onClick={onClick}
        disabled={disabled}
        style={style}
        activeStyle={activeStyle}
        disabledStyle={disabledStyle}
      />
    )
  }
)

export default {
  type: 'view',
  name: 'button',
  create: () => Button
}
