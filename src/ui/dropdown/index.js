import widget from './component'
export default {
  type: 'widget',
  name: 'dropdown',
  create: ({ dropdown }) => ({ widget: widget(dropdown) })
}
