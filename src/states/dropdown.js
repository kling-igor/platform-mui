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
  kind: 'outlined', // flat | outlined | standard
  visibility: true,
  title: 'Title',
  isFloatingTitle: true,
  readonly: false,
  styles: [
    {
      self: [],
      error: [],
      text: [],
      list: [],
      listItemTitle: [],
      listItem: []
    }
  ],
  activeStyles: [
    {
      self: [],
      error: [],
      text: [],
      list: [],
      listItemTitle: [],
      listItem: []
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
  ],
  error: '',
  data,
  value: '',
  isSuggestionsOpened: false
}
