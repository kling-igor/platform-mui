import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import MaterialSnackbar from '@material-ui/core/Snackbar'

const Snackbar = memo(({ open = false, msg = '', duration = 3000, onClose, actionLabel, onActionClick }) => (
  <MaterialSnackbar
    open={open}
    message={msg}
    autoHideDuration={duration === -1 ? 0 : duration}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    action={
      actionLabel && (
        <Button key={actionLabel} color="secondary" size="small" onClick={onActionClick}>
          {actionLabel}
        </Button>
      )
    }
  />
))

export default {
  type: 'view',
  name: 'snackbar',
  create: () => Snackbar
}
