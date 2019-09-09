import React, { memo, useCallback, useMemo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// альтернативный вариант
// https://github.com/xiaolin/react-image-gallery

const noop = () => {}

const Swiper = memo(
  ({
    id,
    style,
    items,
    renderItem,
    onIndexChanged = noop,
    showsButtons = true,
    showsPagination = true,
    loop = false,
    index = 0,
    autoplay = false,
    autoplayTimeout = 2.5
  }) => {
    const children = useMemo(() => {
      return renderItem ? items.map(renderItem) : []
    }, [renderItem])

    const onChange = useCallback(viewIndex => onIndexChanged(viewIndex), [])

    const {
      self: [{ width = '100%' }]
    } = style

    return (
      <Carousel
        id={id}
        axis="horizontal"
        width={width}
        showStatus={false}
        showArrows={showsButtons}
        showIndicators={showsPagination}
        showThumbs={false}
        selectedItem={index}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange}
        dynamicHeight={false}
        autoPlay={autoplay}
        swipeable
        infiniteLoop={loop}
        interval={autoplayTimeout}
      >
        {children}
      </Carousel>
    )
  }
)

export default {
  type: 'view',
  name: 'swiper',
  create: () => Swiper
}
