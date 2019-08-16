import widget from './component'
export default {
  type: 'widget',
  name: 'tabs',
  create: ({ tabs }, { renderChildScreen }) => ({ widget: widget(tabs, renderChildScreen), hasCustomChildren: true })
}
