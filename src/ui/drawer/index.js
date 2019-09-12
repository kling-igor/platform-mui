import widget from './component'
export default {
  type: 'widget',
  name: 'drawer',
  create: ({ drawer }) => ({ widget: widget(drawer) })
}
