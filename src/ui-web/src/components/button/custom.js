import React, { memo, useState } from 'react'
import Icon from '@material-ui/core/Icon'
import CircularProgress from './circular-progress'

const styles = {
  button: {
    minWidth: 36,
    minHeigh: 24,
    height: 36,
    borderStyle: 'solid',
    display: 'inline-block',
    paddingLeft: '16px',
    paddingRight: '16px',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
  },

  label: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.02875em',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: '-moz-none',
    msUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none'
  }
}

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
  const { color, textTransform = 'uppercase' } = titleStyle

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
      <span style={{ ...styles.label, color, textTransform }}>
        {!!icon && loading !== true && <Icon>{icon}</Icon>}
        {!!loading && <CircularProgress size={size} color={color} />}
        {title}
      </span>
    </div>
  )
})

export default CustomButton
