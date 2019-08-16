import widget from './component'
export default {
  type: 'widget',
  name: 'radiogroup',
  create: ({ radiogroup }) => ({ widget: widget(radiogroup) })
}
