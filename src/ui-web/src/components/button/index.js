import React, { memo } from 'react'
import MaterialButton from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import { styled, withTheme } from '@material-ui/styles'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CustomButton from './custom'

const STYLES = {
  // p0: { padding: 0, margin: 0 },
  // center: { display: 'flex', alignItems: 'center' }
  // label: {
  //   color: 'inherit',
  //   whiteSpace: 'wrap',
  //   marginLeft: '4px',
  //   marginRight: '4px',
  //   verticalAlign: 'middle'
  // }
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

// class Button extends PureComponent {
//   render() {
//     const {
//       id,
//       title,
//       style,
//       activeStyle = {},
//       disabledStyle = {},
//       onPress,
//       stopPropagation,
//       kind,
//       loading,
//       disabled,
//       icon
//     } = this.props

//     const iconClassName = (icon && `mdi mdi-${icon.replace('_', '-')}`) || ''

//     const {
//       self: [{ width, height, backgroundColor: normalBackgroundColor, ...rest }] = [{}],
//       label: [{ color: normalLabelColor }] = [{}]
//     } = style

//     const {
//       self: [{ backgroundColor: activeBackgroundColor }] = [{}],
//       label: [{ color: activeLabelColor }] = [{}]
//     } = activeStyle

//     const {
//       self: [{ backgroundColor: disabledBackgroundColor }],
//       label: [{ color: disabledLabelColor }]
//     } = disabledStyle

//     const size = height ? height - 8 : 24

//     const backgroundColor = (() => {
//       if (disabled && disabledBackgroundColor) return disabledBackgroundColor

//       return normalBackgroundColor
//     })()

//     const labelColor = (() => {
//       if (disabled && disabledLabelColor) return disabledLabelColor

//       return normalLabelColor
//     })()

//     if (kind === 'custom') {
//       return <div>CUSTOM BUTTON</div>
//     }

//     if (kind === 'icon' && icon) {
//       return (
//         <IconButton
//           id={id}
//           color="primary"
//           onClick={clickImpl(onPress, stopPropagation)}
//           disabled={disabled}
//           style={{ ...rest }}
//         >
//           <Icon className={iconClassName} size={size} color="inherit" />
//         </IconButton>
//       )
//     }

//     return (
//       <MaterialButton
//         id={id}
//         variant={kind}
//         color="primary"
//         onClick={clickImpl(onPress)}
//         disabled={disabled}
//         style={{ ...style.self[0], display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//       >
//         {/* {!!loading && <CircularProgress size={size} color="inherit" />} */}
//         <p style={STYLES.p0}>
//           <span
//             style={{
//               ...STYLES.label,
//               ...style.label[0]
//             }}
//           >
//             {title}
//           </span>
//         </p>
//         {/* {!!icon && <Icon className={iconClassName} size={size} color="inherit" style={STYLES.center} />} */}
//       </MaterialButton>
//     )
//   }
// }

// const ButtonStyle = styled(MaterialButton)(({ theme }) => {
//   // console.log('THEME:', theme)
//   // return {
//   //   backgroundColor: '#ff0',
//   //   color: theme.palette.getContrastText('#ff0')
//   //   '':
//   // }
//   return {
//     root: {
//       backgroundColor: '#ff0',
//       '&:hover': {
//         backgroundColor: '#f00'
//       }
//     },
//     label: {
//       color: theme.palette.getContrastText('#ff0'),
//       '&:hover': {
//         backgroundColor: theme.palette.getContrastText('#f00')
//       }
//     }
//   }
// })

const StyledButton = withTheme(
  withStyles({
    // Styles applied to the root element
    root: {
      // backgroundColor: ({ backgroundColor }) => backgroundColor,
      width: ({ width }) => width,
      height: ({ height }) => height,
      // это только для custom
      // '&:hover': {
      //   backgroundColor: ({ activeBackgroundColor }) => activeBackgroundColor,
      //   color: ({ theme, activeBackgroundColor }) => theme.palette.getContrastText(activeBackgroundColor)
      // }
      '&:disabled': {
        backgroundColor: ({ variant }) => {
          console.log('variant:', variant)
          return variant === 'contained' ? 'green' : null
        }
      }
    },
    // label: {
    //   color: ({ theme, backgroundColor }) => theme.palette.getContrastText(backgroundColor),
    //   // color: ({ labelColor }) => labelColor,
    //   '&:hover': {
    //     // color: ({ theme }) => theme.palette.getContrastText('#ff0')
    //     // color: ({ activeLabelColor }) => activeLabelColor
    //     color: ({ theme, activeBackgroundColor }) => theme.palette.getContrastText(activeBackgroundColor)
    //   }
    // }

    // Styles applied to the span element that wraps the children
    label: {
      // color: ({ theme, backgroundColor }) => theme.palette.getContrastText(backgroundColor)
      // '&:hover': {
      //   color: '#ff0'
      // }
      // textTransform: 'lowercase'
    },

    //Styles applied to the root element if variant="text"
    text: {
      color: ({ theme, color }) => color
    },

    // Styles applied to the root element if variant="outlined"
    outlined: {},

    // Styles applied to the root element if variant="contained"
    contained: {},

    // seudo-class applied to the root element if disabled={true}
    disabled: {}
  })(({ classes, theme, width, height, backgroundColor, color, ...other }) => (
    <MaterialButton classes={classes} {...other} />
  ))
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
    // const iconClassName = (icon && `mdi mdi-${icon.replace('_', '-')}`) || ''

    const onClick = disabled ? null : clickImpl(onPress, stopPropagation)

    const { self: [{ width, height, backgroundColor, ...rest }] = [{}], label: [{ color }] = [{}] } = style

    // только для custom
    // const {
    //   self: [{ backgroundColor: activeBackgroundColor }] = [{}],
    //   label: [{ color: activeLabelColor }] = [{}]
    // } = activeStyle

    // const {
    //   self: [{ backgroundColor: disabledBackgroundColor }],
    //   label: [{ color: disabledLabelColor }]
    // } = disabledStyle

    const size = height ? height - 8 : 16

    // const backgroundColor = (() => {
    //   // только для custom
    //   // if (disabled && disabledBackgroundColor) return disabledBackgroundColor

    //   return normalBackgroundColor
    // })()

    // const labelColor = (() => {
    //   // только для custom
    //   // if (disabled && disabledLabelColor) return disabledLabelColor

    //   return normalLabelColor
    // })()

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
          {!!loading && <CircularProgress size={size} style={{ marginRight: 2 }} />}
          {title}
        </StyledButton>
      )
    }

    if (kind === 'icon' && icon) {
      return (
        <IconButton id={id} onClick={onClick} disabled={disabled}>
          <Icon>{icon}</Icon>
        </IconButton>
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
      // <button type="button" onClick={onClick} disabled={disabled}>
      //   {title}
      // </button>
    )
  }
)

export default {
  type: 'view',
  name: 'button',
  create: () => Button
}
