import React, { memo } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import MaterialMenuItem from '@material-ui/core/MenuItem'

const onMenuItemClick = (onClick, id) => () => onClick(id)
const titleLeftMargin = { marginLeft: 5 }

const MenuItem = memo(({ id, title = '', icon = '', displayType = 'label', onClick, style = {}, Icon }) => {
  switch (displayType) {
    case 'icon':
      return (
        <Tooltip title={title} placement="bottom">
          <IconButton id={id} onClick={onMenuItemClick(onClick, id)}>
            <Icon id={`${id}.icon`} icon={icon} />
          </IconButton>
        </Tooltip>
      )
    case 'label':
      return (
        <Button id={id} color="inherit" onClick={onMenuItemClick(onClick, id)}>
          {title}
        </Button>
      )
    case 'icon_label':
      return (
        <Button id={id} color="inherit" onClick={onMenuItemClick(onClick, id)}>
          <Icon id={`${id}.icon`} icon={icon} />
          <span style={titleLeftMargin}>{title}</span>
        </Button>
      )
    default:
      return (
        <MaterialMenuItem id={id} style={style} onClick={onMenuItemClick(onClick, id)}>
          {title}
        </MaterialMenuItem>
      )
  }
})

export default {
  type: 'view',
  name: 'menuitem',
  create: ({ icon, withViewHOC }) => withViewHOC(MenuItem, { Icon: icon })
}
