import React, { PureComponent } from 'react'
import MaterialButton from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import { styled, withTheme } from '@material-ui/styles'

const STYLES = {
  p0: { padding: 0, margin: 0 },
  center: { display: 'flex', alignItems: 'center' },
  label: {
    color: 'inherit',
    whiteSpace: 'wrap',
    marginLeft: '4px',
    marginRight: '4px',
    verticalAlign: 'middle'
  }
}

const clickImpl = (click, stopPropagation = false) => event => {
  if (stopPropagation) {
    if (event.preventDefault) {
      event.preventDefault()
    }
    if (event.stopPropagation) {
      event.stopPropagation() // W3C model
    }
  }
  click && click()
}

class Button extends PureComponent {
  render() {
    const {
      id,
      title,
      style,
      activeStyle = {},
      disabledStyle = {},
      onPress,
      stopPropagation,
      kind,
      loading,
      disabled,
      icon
    } = this.props

    const iconClassName = (icon && `mdi mdi-${icon.replace('_', '-')}`) || ''

    const {
      self: [{ width, height, backgroundColor: normalBackgroundColor, ...rest }] = [{}],
      label: [{ color }] = [{}]
    } = style

    const {
      self: [{ backgroundColor: activeBackgroundColor }] = [{}],
      label: [{ color: activeColor }] = [{}]
    } = activeStyle

    const {
      self: [{ backgroundColor: disabledBackgroundColor }],
      label: [{ color: disabledColor }]
    } = disabledStyle

    const size = height ? height - 8 : 24

    // const backgroundColor = (() => {
    //   if (disabled && disabledBackgroundColor) return disabledBackgroundColor

    //   return normalBackgroundColor
    // })()

    if (kind === 'custom') {
      return <div>CUSTOM BUTTON</div>
    }

    if (kind === 'icon' && icon) {
      return (
        <IconButton
          id={id}
          color="primary"
          onClick={clickImpl(onPress, stopPropagation)}
          disabled={disabled}
          style={{ ...rest }}
        >
          <Icon className={iconClassName} size={size} color="inherit" />
        </IconButton>
      )
    }

    return (
      <MaterialButton
        id={id}
        variant={kind}
        color="primary"
        onClick={clickImpl(onPress)}
        disabled={disabled}
        style={{ ...style.self[0], display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* {!!loading && <CircularProgress size={size} color="inherit" />} */}
        <p style={STYLES.p0}>
          <span
            style={{
              ...STYLES.label,
              ...style.label[0]
            }}
          >
            {title}
          </span>
        </p>
        {/* {!!icon && <Icon className={iconClassName} size={size} color="inherit" style={STYLES.center} />} */}
      </MaterialButton>
    )
  }
}

export default {
  type: 'view',
  name: 'button',
  create: () => withTheme(Button)
}
