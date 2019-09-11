export default {
  id: 'list',
  type: 'list',
  visibility: true,
  disableVirtualization: false,
  data: [
    { id: 'item0', title: 'Title 0', value: 'Value 0' },
    { id: 'item1', title: 'Title 1', value: 'Value 1' },
    { id: 'item2', title: 'Title 2', value: 'Value 2' }
  ],
  itemTemplate: undefined, // {(String | Object)},
  orientation: 'vertical', // vertical | horizontal
  columns: 1,
  styles: [
    {
      self: [], // Стили для всего списка
      listItem: [], // Стили для элемента списка
      listItemTitle: [], // Стили для текста внутри элемента списка
      itemSeparator: [], // Стили для разделителя между элементами списка
      columnSeparator: [] // Стили для разделителя между столбцами списка
    }
  ],
  isRefreshing: false,
  onEndReached: () => {},
  onRefresh: undefined
}
