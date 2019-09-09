import widget from './component'
export default {
  type: 'widget',
  name: 'swiper',
  create: ({ swiper }, { getTemplate }) => ({ swiper: widget(swiper, getTemplate) })
}
