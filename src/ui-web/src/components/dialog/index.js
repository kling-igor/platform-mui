import React, { memo } from 'react'

import MaterialDialog from '@material-ui/core/Dialog'

const Dialog = memo(({ children = [], open = false, modal = false, onClose, style }) => {
  return (
    <MaterialDialog
      open={open}
      onClose={onClose}
      disableBackdropClick={modal}
      disableEscapeKeyDown={modal}
      PaperProps={{ style: { maxWidth: '100%', ...style.self[0] } }}
    >
      {children}
    </MaterialDialog>
  )
})

export default {
  type: 'view',
  name: 'dialog',
  create: () => Dialog
}
