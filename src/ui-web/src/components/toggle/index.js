import React, { memo } from 'react'
import styled from 'styled-components'
import MaterialSwitch from '@material-ui/core/Switch'

// IT WORKS!!! https://medium.com/p/e0759f9a15ce/responses/show
const StyledSwitch = styled(({ thumbColor, switchedThumbColor, trackColor, switchedTrackColor, ...other }) => (
  <MaterialSwitch {...other} />
))`
  /*thumb on*/
  .MuiSwitch-switchBase.Mui-checked {
    color: ${({ switchedThumbColor }) => switchedThumbColor};
  }

  /*track on*/
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    opacity: 0.5;
    background-color: ${({ switchedTrackColor }) => switchedTrackColor};
  }

  /*thumb off*/
  .MuiSwitch-switchBase {
    color: ${({ thumbColor }) => thumbColor};
  }

  /*track off*/
  .MuiSwitch-track {
    opacity: 0.5;
    background-color: ${({ trackColor }) => trackColor};
  }
`

const Toggle = memo(({ id, value, readonly, style, activeStyle = {}, disabledStyle = {}, onChange }) => {
  const {
    self: [{}] = [{}],
    thumb: [{ backgroundColor: thumbColor }] = [{}],
    thumbSwitched: [{ backgroundColor: switchedThumbColor }] = [{}],
    track: [{ backgroundColor: trackColor }] = [{}],
    trackSwitched: [{ backgroundColor: switchedTrackColor }] = [{}]
  } = style

  return (
    <StyledSwitch
      id={id}
      color="default"
      checked={value}
      disabled={readonly}
      onChange={onChange}
      thumbColor={thumbColor}
      switchedThumbColor={switchedThumbColor}
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
