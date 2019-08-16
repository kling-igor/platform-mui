import widget from './component'
export default {
  type: 'widget',
  name: 'image',
  create: ({ image }) => ({ widget: widget(image) })
}
