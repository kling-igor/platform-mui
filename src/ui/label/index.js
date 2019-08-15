import widget from './component'
export default {
  type: 'widget',
  name: 'label',
  create: ({ label }, { formulaParser }) => widget(label, formulaParser)
}
