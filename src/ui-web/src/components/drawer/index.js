import React, { memo } from 'react'
import MaterialDrawer from '@material-ui/core/Drawer'

const onClose = onChange => () => onChange(false)

const wrapperStyle = { display: 'table', width: '100%', height: '100%' }

const ModalProps = { disablePortal: true, keepMounted: true }

const Drawer = memo(({ id, menu, content, open = false, onChange, DrawerProps = {} }) => (
  <div id={id} style={wrapperStyle}>
    {content}
    <MaterialDrawer open={open} onClose={onClose(onChange)} ModalProps={ModalProps} {...DrawerProps}>
      {menu}
    </MaterialDrawer>
  </div>
))

export default {
  type: 'view',
  name: 'drawer',
  create: () => Drawer
}
