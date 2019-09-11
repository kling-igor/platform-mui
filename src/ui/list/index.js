import widget from './component'
export default {
  type: 'widget',
  name: 'list',
  create: ({ list }) => ({ widget: widget(list) })
}
