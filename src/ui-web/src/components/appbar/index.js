import React, { memo } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { withStyles, fade, makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 300
      }
    }
  }
}))

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
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <AppBar id={id} position="static" style={style.self[0]}>
          <Toolbar variant="dense">
            {!!leftIcon && (
              <IconButton className={classes.menuButton} onClick={leftClick} color="inherit">
                {!!leftIcon && <Icon id="leftIcon" icon={leftIcon} />}
              </IconButton>
            )}

            <Typography variant="h6" color="inherit" className={classes.title} style={style.title[0]}>
              {title}
            </Typography>

            {!!isSearching && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Icon icon="search" />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
)

export default {
  type: 'view',
  name: 'appbar',
  create: ({ icon, menu, input, withViewHOC }) => withViewHOC(Appbar, { Icon: icon, Menu: menu, Input: input })
}
