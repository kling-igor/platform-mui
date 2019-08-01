import React, { memo } from 'react'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MaterialCheckbox from '@material-ui/core/Checkbox'

const StyledCheckbox = withTheme(
  withStyles({
    root: {
      color: ({ iconColor, disabled }) => (disabled ? null : iconColor)
    },
    checked: {
      '&$checked': {
        color: ({ iconColor, disabled }) => (disabled ? null : iconColor)
      }
    }
  })(({ classes, theme, iconColor, ...other }) => <MaterialCheckbox classes={classes} {...other} />)
)

const StyledFormControlLabel = withTheme(
  withStyles({
    root: {
      marginLeft: '0px'
    },
    label: {
      color: ({ labelColor }) => labelColor
    }
  })(({ classes, theme, labelColor, ...other }) => <FormControlLabel classes={classes} {...other} />)
)

const placements = {
  start: 'end',
  end: 'start'
}

const labelPlacement = iconPlacement => placements[iconPlacement] || 'start'

const Checkbox = memo(
  ({ id, title, value, readonly, style, activeStyle = {}, disabledStyle = {}, iconPlacement, onChange }) => {
    const {
      self: [{ color }] = [{}],
      icon: [{ color: iconColor }] = [{}],
      title: [{ color: titleColor }] = [{}]
    } = style

    return (
      <StyledFormControlLabel
        control={
          <StyledCheckbox
            id={id}
            checked={value}
            disabled={readonly}
            onChange={onChange}
            label={title}
            iconColor={iconColor}
          />
        }
        label={title}
        labelPlacement={labelPlacement(iconPlacement)}
        labelColor={titleColor}
      />
    )
  }
)

export default {
  type: 'view',
  name: 'checkbox',
  create: () => Checkbox
}
