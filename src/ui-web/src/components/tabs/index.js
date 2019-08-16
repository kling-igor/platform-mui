import React, { memo, useState, useCallback, useMemo, useRef } from 'react'
import AppBar from '@material-ui/core/AppBar'
import MaterialTabs from '@material-ui/core/Tabs'
import MaterialTab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import styled from 'styled-components'

const StyledBadge = styled(({ backgroundColor, ...other }) => <Badge {...other} />)`
  .MuiBadge-colorPrimary {
    background-color: ${({ backgroundColor = '#00f' }) => backgroundColor};
  }
`

const Tab = memo(({ id, visibility, title, badge, style, isActive }) => {
  if (!visibility) {
    return null
  }

  const tabTitleComponent = useMemo(() => <span style={style.title[0]}>{title || ''}</span>, [title])

  const label = useMemo(() => {
    if (badge) {
      const [{ backgroundColor = '#00f' }] = style.badge

      return (
        <StyledBadge
          backgroundColor={backgroundColor}
          badgeContent={<span style={style.badgeText[0]}>{badge}</span>}
          color="primary"
        >
          {tabTitleComponent}
        </StyledBadge>
      )
    }

    return tabTitleComponent
  }, [badge, tabTitleComponent])

  const actualStyle = useMemo(() => {
    // табины, рисуемые из цикла, теряют необходимый класс, добавляем вручную свойства из этого класса
    return Object.assign(
      { flexGrow: 1, maxWidth: 'none', flexBasis: 0, flexShrink: 1 },
      isActive ? style.tab[0] : style.tabBar[0]
    )
  }, [isActive])

  return <MaterialTab id={id} key={id} label={label} style={actualStyle} />
})

const getTabIndexById = (tabs, selectedTab) => tabs.findIndex(tab => tab.id === selectedTab)

const Tabs = memo(({ id, tabs, style, selectedTab, scrollable, onTabChanged }) => {
  const [currentTab, setCurrentTab] = useState(selectedTab ? getTabIndexById(tabs, selectedTab) : 0)

  // TODO закешировать!!!
  const onChange = useCallback((event, index) => {
    setCurrentTab(index)
    onTabChanged(tabs[index].id)
  }, [])

  const activeTab = useMemo(() => {
    return selectedTab || (tabs.length > 0 ? tabs[0].id : -1)
  }, [selectedTab, tabs])

  const scrollButtons = useMemo(() => {
    return scrollable ? 'auto' : 'off'
  }, [scrollable])

  const variant = useMemo(() => {
    return scrollable ? 'scrollable' : 'fullWidth'
  }, [scrollable])

  return (
    <div>
      <AppBar position="static">
        <MaterialTabs
          id={id}
          variant={variant}
          value={currentTab}
          onChange={onChange}
          style={style.self[0]}
          TabIndicatorProps={{ style: style.inkBar[0] }}
          scrollButtons={scrollButtons}
        >
          {tabs.map(tab => (
            <Tab key={tab.id} style={style} isActive={activeTab === tab.id} {...tab} />
          ))}
        </MaterialTabs>
      </AppBar>
      {tabs.length > 0 && tabs[currentTab].screen}
    </div>
  )
})

export default {
  type: 'view',
  name: 'tabs',
  create: () => Tabs
}
