import React, { PureComponent } from 'react'
import alignStyle from './align'
import orientations from './orientation'

class View extends PureComponent {
  render() {
    const {
      id,
      children = [],
      click,
      style = { self: [] },
      align = 'left_top',
      orientation = 'vertical',
      scrollable = false
    } = this.props

    const containerStyles = [alignStyle[orientation][align], orientations[orientation], ...style.self]
    if (scrollable) {
      containerStyles.push(orientation === 'vertical' ? { overflowY: 'auto' } : { overflowX: 'auto' })
    }

    const mergedStyles = Object.assign({ display: 'flex' }, ...containerStyles)

    return (
      // eslint-disable-next-line
      <div id={id} onClick={click} role="presentation" style={mergedStyles}>
        {children}
      </div>
    )
  }
}

export default {
  type: 'view',
  name: 'view',
  create: () => View
}
