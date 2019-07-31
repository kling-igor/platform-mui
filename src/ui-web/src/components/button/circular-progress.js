import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withTheme } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'

const StyledCircularProgress = withTheme(
  withStyles({
    root: {
      marginRight: '8px'
    },
    circle: {
      color: ({ color }) => color
    }
  })(({ classes, color, ...other }) => <CircularProgress classes={classes} color="inherited" {...other} />)
)

export default StyledCircularProgress
