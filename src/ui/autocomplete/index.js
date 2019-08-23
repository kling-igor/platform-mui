import widget from './component'
export default {
  type: 'widget',
  name: 'autocomplete',
  create: ({ autocomplete }) => ({ widget: widget(autocomplete) })
}
