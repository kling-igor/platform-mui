import React, { memo, useState } from 'react'
import Icon from '@material-ui/core/Icon'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  button: {
    minWidth: 64,
    borderStyle: 'solid',
    display: 'inline-block'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 16,
    marginLeft: 12,
    marginRight: -4
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginLeft: 9,
    marginRight: 9,
    verticalAlign: 'middle'
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
  const { color } = titleStyle

  return (
    <div
      id={id}
      style={{ ...styles.button, ...buttonStyle }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <span style={styles.label}>{title}</span>
    </div>
  )
})

export default CustomButton
