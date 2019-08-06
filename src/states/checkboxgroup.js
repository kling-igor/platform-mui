export default {
  type: 'checkboxgroup',
  id: 'mycheckboxgroup',
  visibility: true,
  readonly: false,
  orientation: 'vertical', // vertical, horizontal
  iconPlacement: 'start', // start end
  styles: [
    {
      self: [],
      listItem: [],
      listItemTitle: [{ color: '#f00' }],
      listItemIcon: [{ color: '#0f0' }]
    }
  ],
  activeStyles: [],
  disabledStyles: [],
  onSelectFunc: () => {},
  data: [
    {
      id: '1',
      title: 'One',
      value: 'The One'
    },
    {
      id: '2',
      title: 'Two',
      value: 'The Two'
    }
  ],
  // выбранные значения
  value: [
    {
      id: '1',
      title: 'One',
      value: 'The One'
    }
  ]
}
