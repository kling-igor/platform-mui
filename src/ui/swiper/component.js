import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState, getTemplate }) => {
  const {
    id = 'swiper',
    visibility,
    mergedStyle,
    onIndexChanged,
    showsButtons,
    showsPagination,
    loop,
    index,
    autoplay,
    autoplayTimeout,
    itemTemplate,
    itemBindRule,
    renderItem,
    internalData
  } = viewState

  if (!visibility) return null

  const actualRenderItem = itemBindRule && itemTemplate && renderItem ? renderItem : undefined

  // if itemTemplate is string
  // itemTemplate = getTemplate(itemTemplate)

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      onIndexChanged={onIndexChanged}
      showsButtons={showsButtons}
      showsPagination={showsPagination}
      loop={loop}
      index={index}
      autoplay={autoplay}
      autoplayTimeout={autoplayTimeout}
      renderItem={actualRenderItem}
      items={internalData}
    />
  )
}
