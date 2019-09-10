import widget from './component'
export default {
  type: 'widget',
  name: 'bottomnavigation',
  create: ({ bottomnavigation }) => ({ widget: widget(bottomnavigation), hasCustomChildren: true })
}
