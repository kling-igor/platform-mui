import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const Alert = memo(({ title = '', msg = '', actions = [], cancelable = true, onClose }) => (
  <Dialog disableBackdropClick={!cancelable} disableEscapeKeyDown={!cancelable} open onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{msg}</DialogContentText>
    </DialogContent>
    <DialogActions>
      {actions.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick} color="primary">
          {text}
        </Button>
      ))}
    </DialogActions>
  </Dialog>
))

export default {
  type: 'view',
  name: 'alert',
  create: () => Alert
}
