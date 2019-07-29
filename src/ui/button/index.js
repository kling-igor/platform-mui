import widget from './component'
export default {
  type: 'widget',
  name: 'button',
  create: ({ button }) => widget(button)
}
