import React, { memo, useState, useCallback, useMemo, useEffect } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const defaultStyle = {
  self: [],
  tab: { self: [], icon: [], label: [] },
  selectedTab: { self: [], icon: [], label: [] }
}

const getTabIndexById = (tabs, tabId) => tabs.findIndex(tab => tab.id === tabId)

const styles = {
  navigationContainer: { overflow: 'auto', width: '100%', marginBottom: 64 }
}

const BottomNav = memo(({ id, tabs = [], style = defaultStyle, onTabChanged, selectedTab, Icon, Image }) => {
  const [index, setIndex] = useState(selectedTab ? getTabIndexById(tabs, selectedTab) : 0)
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedTab)

  useEffect(() => {
    if (selectedTab !== selectedTabIndex) {
      const idx = getTabIndexById(tabs, selectedTab)
      setIndex(idx === -1 ? 0 : idx)
      setSelectedTabIndex(selectedTab)
    }
  }, [selectedTab])

  const onIndexChange = useCallback((_, value) => onTabChanged(value), [])

  return (
    <>
      <div style={styles.navigationContainer}>{tabs[index].renderNestedScreen()}</div>
      <BottomNavigation id={id} key={id} value={selectedTab} onChange={onIndexChange} style={style.self[0]} showLabels>
        {tabs.map(tab => {
          const isSelected = tab.id === selectedTab
          const chosenStyle = isSelected ? style.selectedTab : style.tab
          let icon = null

          if (tab.icon) {
            icon = (
              <Icon
                id={`icon_${tab.id}`}
                size={chosenStyle.icon[0] && chosenStyle.icon[0].size}
                color={chosenStyle.icon[0] && chosenStyle.icon[0].color}
                icon={tab.icon}
              />
            )
          } else {
            const imageSelected = tab.imageSelected ? tab.imageSelected : tab.image
            icon = (
              <Image
                id={`${tab.id}.bottom_navigation_image`}
                value={isSelected ? imageSelected : tab.image}
                styles={chosenStyle.image[0]}
              />
            )
          }

          return (
            <BottomNavigationAction
              id={tab.id}
              key={tab.id}
              label={
                <span id={`label_${tab.id}`} style={chosenStyle.label[0]}>
                  {tab.title}
                </span>
              }
              value={tab.id}
              style={chosenStyle.self[0]}
              icon={icon}
            />
          )
        })}
      </BottomNavigation>
    </>
  )
})

export default {
  type: 'view',
  name: 'bottomnavigation',
  create: ({ icon, image, withViewHOC }) => withViewHOC(BottomNav, { Icon: icon, Image: image })
}
