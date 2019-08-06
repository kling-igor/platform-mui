import widget from './component'
export default {
  type: 'widget',
  name: 'icon',
  create: ({ icon }) => widget(icon)
}
