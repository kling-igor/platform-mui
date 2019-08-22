const data = [
  {
    id: '1',
    title: 'One',
    value: 'One'
  },
  {
    id: '2',
    title: 'Two',
    value: 'Two'
  },
  {
    id: '3',
    title: 'Three',
    value: 'Three'
  }
]

export default {
  id: 'dropdown',
  type: 'dropdown',
  kind: 'flat', // flat | outlined | standard
  visibility: true,
  title: 'Title',
  isFloatingTitle: true,
  readonly: false,
  error: null,
  data,
  value: data[0],
  isSuggestionsOpened: true,
  styles: [
    {
      self: [{ width: 200 }],
      error: [],
      text: [{ backgroundColor: '#f002' }],
      list: [{ borderWidth: '1px', borderColor: '#000', borderStyle: 'solid' }],
      listItemTitle: [{ color: '#f00' }],
      listItem: [{ backgroundColor: '#00f' }]
    }
  ],
  activeStyles: [
    {
      self: [],
      error: [],
      text: [],
      list: [],
      listItemTitle: [],
      listItem: [{ backgroundColor: '#fF0' }]
    }
  ],
  disabledStyles: [
    {
      self: [],
      error: [],
      text: [],
      list: [],
      listItemTitle: [],
      listItem: []
    }
  ]
}
