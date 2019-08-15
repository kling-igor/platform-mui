import widget from './component'
export default {
  type: 'widget',
  name: 'accordion',
  create: ({ accordion }) => widget(accordion)
}
