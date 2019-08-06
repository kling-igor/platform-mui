export default {
  type: 'radiogroup',
  id: 'myradiogroup',
  visibility: true,
  readonly: false,
  orientation: 'horizontal', // vertical, horizontal
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
  selectItem: () => {},
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
  // выбранное значение
  value: {
    id: '1',
    title: 'One',
    value: 'The One'
  }
}
