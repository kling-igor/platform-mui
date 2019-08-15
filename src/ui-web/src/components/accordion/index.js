import React, { memo, useMemo } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Collapse } from '@material-ui/core'
import styled from 'styled-components'

const RootWrapperStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftAlignedGroupStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 30px);
`

const TitleStyle = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`

const ContentStyle = styled.div`
  height: 100%;
`

const parseStyle = ({ disabled, expanded, style, activeStyle, disabledStyle }) => styleKey => {
  if (disabled && disabledStyle && disabledStyle[styleKey]) {
    return { ...(style[styleKey] && style[styleKey][0]), ...disabledStyle[styleKey][0] }
  }
  if (expanded && activeStyle && activeStyle[styleKey]) {
    return { ...(style[styleKey] && style[styleKey][0]), ...activeStyle[styleKey][0] }
  }
  return (style[styleKey] && style[styleKey][0]) || {}
}

const Accordion = memo(
  ({
    id,
    title,
    expanded,
    disabled,
    style,
    activeStyle,
    disabledStyle,
    toggle,
    leftIcon,
    rightIcon,
    children,
    Icon,
    Image
  }) => {
    const memoizedParseStyle = useMemo(() => parseStyle({ disabled, expanded, style, activeStyle, disabledStyle }))
    return (
      <div style={style.self[0]}>
        <ListItem id={id} button onClick={toggle} style={style.header[0]} disabled={disabled}>
          <RootWrapperStyle>
            <LeftAlignedGroupStyle>
              {!!leftIcon && <Icon {...leftIcon} color={memoizedParseStyle('leftIcon').color || leftIcon.color} />}
              <ListItemText primary={<TitleStyle style={style.title[0]}>{title}</TitleStyle>} />
            </LeftAlignedGroupStyle>
            {!!rightIcon ? (
              <Icon {...rightIcon} color={memoizedParseStyle('rightIcon').color || rightIcon.color} />
            ) : (
              <Icon
                icon={expanded ? 'expand_less' : 'expand_more'}
                color={memoizedParseStyle('rightIcon').color || '#333'}
              />
            )}
          </RootWrapperStyle>
        </ListItem>
        <Collapse in={expanded} timeout="auto">
          <ContentStyle style={style.content[0]}>{children}</ContentStyle>
        </Collapse>
      </div>
    )
  }
)

export default {
  type: 'view',
  name: 'accordion',
  create: ({ icon, image, withViewHOC }) => withViewHOC(Accordion, { Icon: icon, Image: image })
}
