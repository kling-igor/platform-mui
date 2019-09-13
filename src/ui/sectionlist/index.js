import widget from './component'
export default {
  type: 'widget',
  name: 'sectionlist',
  create: ({ sectionlist }) => ({ widget: widget(sectionlist) })
}
