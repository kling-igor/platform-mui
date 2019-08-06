import React, { memo } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const RootStyle = styled.div`
  flex-grow: 1;
`
const Appbar = memo(
  ({
    id,
    title,
    leftIcon,
    leftClick,
    menuIcon,
    menuItemClick,
    hasTabs,
    menuItems,
    isSearching,
    value,
    hint,
    changeValue,
    submitValue,
    clearValue,
    style,
    Icon,
    Menu,
    Input
  }) => {
    return (
      <RootStyle>
        <AppBar id={id} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={style.title[0]}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </RootStyle>
    )
  }
)

export default {
  type: 'view',
  name: 'appbar',
  create: ({ icon, menu, input, withViewHOC }) => withViewHOC(Appbar, { Icon: icon, Menu: menu, Input: input })
}
