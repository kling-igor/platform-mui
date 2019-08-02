import widget from './component'
export default {
  type: 'widget',
  name: 'toggle',
  create: ({ toggle }) => widget(toggle)
}
