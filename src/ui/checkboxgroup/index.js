import widget from './component'
export default {
  type: 'widget',
  name: 'checkboxgroup',
  create: ({ checkboxgroup }) => ({ widget: widget(checkboxgroup) })
}
