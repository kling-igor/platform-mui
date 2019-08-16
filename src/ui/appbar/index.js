import widget from './component'
export default {
  type: 'widget',
  name: 'appbar',
  create: ({ appbar }) => ({ widget: widget(appbar) })
}
