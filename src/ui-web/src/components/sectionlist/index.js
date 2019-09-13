import React, { memo } from 'react'

const renderHeaderCallback = (value, sectionId, renderHeader) => () => renderHeader(value, sectionId)

const defaultStyle = {
  self: [],
  listItem: {
    self: [],
    title: []
  },
  sectionedListHeader: {
    self: [],
    title: []
  }
}

const SectionedList = memo(
  ({
    id,
    style = defaultStyle,
    renderHeader,
    renderItem,
    selectItem,
    data = [],
    readonly = false,
    List,
    ListHeader
  }) => (
    <div id={id} style={{ overflow: 'auto', ...style.self[0] }}>
      {data.map(section => {
        const { id: sectionId, value, data: sectionData } = section
        return [
          <ListHeader
            key={sectionId}
            section={section}
            style={style.sectionedListHeader[0]}
            renderHeader={renderHeader && renderHeaderCallback(value, sectionId, renderHeader)}
          />,
          <List
            id={`${sectionId}.list`}
            key={`${sectionId}.list`}
            data={sectionData}
            renderItem={renderItem}
            selectItem={selectItem}
            sectionId={sectionId}
            readonly={readonly}
            style={{ self: [], listItem: style.listItem }}
          />
        ]
      })}
    </div>
  )
)

export default {
  type: 'view',
  name: 'sectionedList',
  create: ({ list, listheader, withViewHOC }) => withViewHOC(SectionedList, { List: list, ListHeader: listheader })
}
