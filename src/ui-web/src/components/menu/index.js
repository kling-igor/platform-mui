import React, { memo, useState, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MaterialMenu from '@material-ui/core/Menu'

const Menu = memo(
  ({
    openMenuIcon = 'dots-vertical',
    menuItems = [],
    onMenuItemClick,
    style = {},
    menuItemStyle = {},
    MenuItem,
    Icon
  }) => {
    const [anchor, setAnchor] = useState(null)

    const handleClick = useCallback(event => {
      setAnchor(event.currentTarget)
    })

    const handleClose = useCallback(() => {
      setAnchor(null)
    })

    const collapsedItems = []
    const items = []
    menuItems.forEach(item => {
      const component = <MenuItem key={item.id} {...item} style={menuItemStyle} onClick={onMenuItemClick} />
      if (item.displayType === 'collapsed') {
        collapsedItems.push(component)
      } else {
        items.push(component)
      }
    })

    return (
      <div>
        {items.length > 0 && items}
        {collapsedItems.length > 0 && (
          <React.Fragment>
            <IconButton onClick={handleClick}>
              <Icon id="menuIcon" icon={openMenuIcon} color="#fff" />
            </IconButton>
            <MaterialMenu
              id="childrenListContainer"
              anchorEl={anchor}
              open={!!anchor}
              style={style}
              onClose={handleClose}
            >
              {collapsedItems}
            </MaterialMenu>
          </React.Fragment>
        )}
      </div>
    )
  }
)

export default {
  type: 'view',
  name: 'menu',
  create: ({ menuitem, icon, withViewHOC }) => withViewHOC(Menu, { MenuItem: menuitem, Icon: icon })
}
