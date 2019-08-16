import widget from './component'
export default {
  type: 'widget',
  name: 'input',
  create: ({ input }) => ({ widget: widget(input) })
}
