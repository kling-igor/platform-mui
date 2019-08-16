import widget from './component'
export default {
  type: 'widget',
  name: 'fab',
  create: ({ fab }) => ({ widget: widget(fab) })
}
