import React, { memo, useState } from 'react'
import Icon from '@material-ui/core/Icon'
import CircularProgress from '@material-ui/core/CircularProgress'
import { styled, withTheme } from '@material-ui/styles'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const styles = {
  button: {
    minWidth: 24,
    minHeigh: 24,
    height: 32,
    borderStyle: 'solid',
    display: 'inline-block'
  },
  label: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 1,

    marginLeft: 8,
    marginRight: 8,
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: '-moz-none',
    msUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none'
  }
}

const StyledCircularProgress = withTheme(
  withStyles({
    root: {
      marginRight: '4px'
    },
    circle: {
      color: ({ color }) => color
    }
  })(({ classes, color, ...other }) => <CircularProgress classes={classes} {...other} />)
)

const parseButtonStyle = ({ hovered, disabled, style, activeStyle, disabledStyle }) => {
  if (disabled) {
    return { ...style.self[0], ...disabledStyle.self[0] }
  }
  if (hovered) {
    return { ...style.self[0], ...activeStyle.self[0] }
  }
  return style.self[0]
}

const parseTitleStyle = ({ hovered, disabled, style, activeStyle, disabledStyle }) => {
  if (disabled) {
    return { ...style.label[0], ...disabledStyle.label[0] }
  }
  if (hovered) {
    return { ...style.label[0], ...activeStyle.label[0] }
  }
  return style.label[0]
}

const CustomButton = memo(({ id, loading, icon, title, disabled, onClick, style, activeStyle, disabledStyle }) => {
  const [hovered, setHovered] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }

  const onLeave = () => {
    setHovered(false)
  }

  const buttonStyle = parseButtonStyle({ hovered, disabled, style, activeStyle, disabledStyle })
  const titleStyle = parseTitleStyle({ hovered, disabled, style, activeStyle, disabledStyle })
  const { color } = titleStyle

  const { self: [{ height }] = [{}] } = style

  const size = height ? height - 8 : 16

  return (
    <div
      id={id}
      style={{ ...styles.button, ...buttonStyle }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <span style={{ ...styles.label, color }}>
        {!!icon && loading !== true && <Icon>{icon}</Icon>}
        {!!loading && <StyledCircularProgress size={size} color={color} />}
        {title}
      </span>
    </div>
  )
})

export default CustomButton
