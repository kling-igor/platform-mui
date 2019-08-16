import widget from './component'
export default {
  type: 'widget',
  name: 'checkbox',
  create: ({ checkbox }) => ({ widget: widget(checkbox) })
}
