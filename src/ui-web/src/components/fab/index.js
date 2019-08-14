import React, { memo } from 'react'
import Fab from '@material-ui/core/Fab'
import styled from 'styled-components'
const noop = () => {}

const RootStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const FAB = memo(({ id, icon = 'plus', style, readonly = false, onPress = noop, Icon }) => {
  const {
    self = [{ backgroundColor: '#f44336', bottom: 30, right: 30 }],
    icon: [{ color = '#fff' }],
    disabled = [{ backgroundColor: '#bdbdbd', bottom: 30, right: 30 }]
  } = style

  const fabStyle = Object.assign({ position: 'absolute' }, self[0], readonly ? disabled[0] : {})

  return (
    <RootStyle>
      <Fab style={fabStyle} disabled={readonly}>
        <Icon id="fabIcon" icon={icon} color={color} size={24} />
      </Fab>
    </RootStyle>
  )
})

export default {
  type: 'view',
  name: 'fab',
  create: ({ icon, withViewHOC }) => withViewHOC(FAB, { Icon: icon })
}
