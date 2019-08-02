import React, { PureComponent } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'

const fullContainerSize = { height: '100%', width: '100%' }

class Root extends PureComponent {
  render() {
    const { theme } = this.props

    const muiTheme = createMuiTheme({
      palette: {
        background: {
          default: theme.root.self[0].background
        },
        primary: {
          light: theme.root.self[0].lightPrimary,
          main: theme.root.self[0].primary,
          dark: theme.root.self[0].darkPrimary,
          contrastText: theme.root.self[0].textPrimary
        },
        secondary: {
          // light:will be calculated from palette.secondary.main,
          main: theme.root.self[0].accent,
          // dark: be calculated from palette.secondary.dark,
          contrastText: theme.root.self[0].textSecondary
        }

        // placeholder: theme.root.self[0].textSecondary,
        // disabled: theme.root.self[0].disabled
      }
    })

    return (
      <div style={fullContainerSize}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={muiTheme}>
            <>
              {this.props.children}
              <ToastContainer />
            </>
          </ThemeProvider>
        </StylesProvider>
      </div>
    )
  }
}

export default {
  type: 'view',
  name: 'root',
  create: () => Root
}
