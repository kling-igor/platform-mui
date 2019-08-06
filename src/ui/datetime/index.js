import widget from './component'
export default {
  type: 'widget',
  name: 'datetime',
  create: ({ datetime }) => widget(datetime)
}
