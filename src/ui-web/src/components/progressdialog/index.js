import React, { memo } from 'react'

const noop = () => {}

const defaultStyle = {
  self: [],
  progress: [],
  label: []
}

const ProgressDialog = memo(
  ({ open = false, modal = false, msg = '', style = defaultStyle, onClose = noop, Dialog, Progress, Label }) => (
    <Dialog open={open} modal={modal} onClose={onClose}>
      <div
        style={Object.assign(
          {
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          },
          ...style.self
        )}
      >
        <Progress
          size={style.progress[0] && style.progress[0].size}
          color={style.progress[0] && style.progress[0].color}
        />
        <Label id="progress-dialog-msg" value={msg} style={{ self: style.label }} />
      </div>
    </Dialog>
  )
)

export default {
  type: 'view',
  name: 'progressdialog',
  create: ({ dialog, progress, label, withViewHOC }) =>
    withViewHOC(ProgressDialog, { Label: label, Dialog: dialog, Progress: progress })
}
