import widget from './component'
export default {
  type: 'widget',
  name: 'icon',
  create: ({ icon }) => ({ widget: widget(icon) })
}
