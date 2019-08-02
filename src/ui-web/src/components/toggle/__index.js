import React, { memo } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import MaterialSwitch from '@material-ui/core/Switch'

// const StyledSwitch = withStyles(theme => ({
//   root: {},
//   // Styles applied to the internal SwitchBase component's root class.
//   switchBase: {
//     color: ({ thumbColor }) => thumbColor // thumb - off state
//     // '&$checked': {
//     // color: ({ thumbColor }) => thumbColor // thumb - on state
//     // }
//     /* // почему-то не применяется значение переменной
//     '&$checked + $track': {
//       opacity: 1,
//       backgroundColor: ({ switchedTrackColor }) => switchedTrackColor // track - on state
//     }
// */
//     // '&$checked': {
//     //   opacity: 1,
//     //   backgroundColor: ({ switchedTrackColor }) => switchedTrackColor
//     // }
//   },
//   // Pseudo-class applied to the internal SwitchBase component's checked class.
//   checked: {},
//   // Pseudo-class applied to the internal SwitchBase component's disabled class.
//   disabled: {},
//   // Styles used to create the thumb passed to the internal SwitchBase component icon prop.
//   thumb: {
//     // boxShadow: 'none', // отключает легкую тень вокруг thumb
//     color: ({ thumbColor }) => thumbColor
//   },
//   // track - off state
//   // Styles applied to the track element.
//   track: {
//     opacity: 1,
//     backgroundColor: '#0f0',
//     '&$checked': {
//       backgroundColor: '#000'
//     }
//   }
// }))(({ classes, theme, thumbColor, trackColor, switchedTrackColor, ...other }) => (
//   <MaterialSwitch
//     classes={{
//       root: classes.root,
//       switchBase: classes.switchBase,
//       thumb: classes.thumb,
//       track: classes.track,
//       checked: classes.checked
//     }}
//     {...other}
//   />
// ))

// const StyledSwitch = withStyles({
//   switchBase: {
//     color: ({ thumbColor }) => thumbColor, // thumb (off)
//     // так не работает!!! - работает только если возвращать цвет явно, а не функционально
//     // '&$checked': {
//     //   color: ({ thumbColor }) => thumbColor // thumb (on)
//     // },
//     '&$checked + $track': {
//       opacity: 1,
//       backgroundColor: ({ trackSwitched }) => trackSwitched // track (on)
//     }
//   },
//   colorPrimary: {},
//   colorSecondary: {},
//   checked: {},
//   track: {
//     opacity: 1
//   }
// })(({ classes, theme, thumbColor, trackColor, switchedTrackColor, ...other }) => (
//   <MaterialSwitch
//     classes={{
//       // TODO: тут можно отключать классы - это тоже как-то влияет
//       // root: classes.root,
//       switchBase: classes.switchBase,
//       // thumb: classes.thumb,
//       track: classes.track
//       // colorPrimary: classes.colorPrimary,
//       // colorSecondary: classes.colorSecondary,
//       // checked: classes.checked
//     }}
//     {...other}
//   />
// ))

// const useStyles = makeStyles({
//   switchBase: {
//     color: ({ thumbColor }) => thumbColor,
//     '&$checked': {
//       color: ({ thumbColor }) => thumbColor
//     }
//   },
//   track: {
//     opacity: 1,
//     backgroundColor: ({ trackColor }) => trackColor
//   }
// })

// const StyledSwitch = props => {
//   const classes = useStyles(props)
//   const { thumbColor, trackColor, switchedTrackColor, ...other } = props
//   return (
//     <MaterialSwitch
//       classes={{
//         switchBase: classes.switchBase,
//         track: classes.track
//       }}
//       {...other}
//     />
//   )
// }

const StyledSwitch = withStyles({
  switchBase: {
    // thumb off state
    color: ({ thumbColor }) => thumbColor,
    // thumb on state
    '&$checked': {
      color: '#f0f'
    },
    // track on state
    '&$checked + $track': {
      opacity: 1,
      backgroundColor: '#00F'
    }
  },
  checked: {},
  disabled: {},
  track: {
    // track off state
    opacity: 1,
    backgroundColor: ({ trackColor }) => trackColor
  },
  colorSecondary: {},
  colorPrimary: {}
})(({ classes, thumbColor, trackColor, switchedTrackColor, ...other }) => (
  <MaterialSwitch
    classes={{
      switchBase: classes.switchBase,
      track: classes.track,
      checked: classes.checked,
      disabled: classes.disabled,
      colorSecondary: classes.colorSecondary,
      colorPrimary: classes.colorPrimary
    }}
    {...other}
  />
))

const Toggle = memo(({ id, value, readonly, style, activeStyle = {}, disabledStyle = {}, onChange }) => {
  const {
    self: [{}] = [{}],
    thumb: [{ color: thumbColor }] = [{}],
    track: [{ backgroundColor: trackColor }] = [{}],
    trackSwitched: [{ backgroundColor: switchedTrackColor }] = [{}]
  } = style

  return (
    <StyledSwitch
      id={id}
      checked={value}
      disabled={readonly}
      onChange={onChange}
      thumbColor={thumbColor}
      trackColor={trackColor}
      switchedTrackColor={switchedTrackColor}
    />
  )
})

export default {
  type: 'view',
  name: 'toggle',
  create: () => Toggle
}
