import React, { memo } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'

const defaultStyle = {
  self: [],
  title: []
}

const ListHeader = memo(({ section, style = defaultStyle, renderHeader, Label }) => {
  const { id: sectionId, title, value } = section
  return (
    <ListSubheader id={sectionId} disableSticky style={style.self[0]}>
      {renderHeader ? (
        renderHeader()
      ) : (
        <Label id={`default_label_${sectionId}`} value={title || value} style={{ self: style.title }} />
      )}
    </ListSubheader>
  )
})

export default {
  type: 'view',
  name: 'listheader',
  create: ({ label, withViewHOC }) => withViewHOC(ListHeader, { Label: label })
}
