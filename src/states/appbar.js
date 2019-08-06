export default {
  id: 'appbar',
  type: 'appbar',
  title: 'Title',
  visibility: true,
  leftIcon: null,
  leftClick: () => {},
  menuIcon: 'dots-vertical',
  menuItemClick: () => {},
  isSearching: false,
  hasTabs: false,
  elements: [
    {
      title: 'Домой', //  заголовок пункта меню
      id: 'home', // идентификатор пункта меню
      displayType: 'icon', // icon | label | icon_label | collapsed",  // способ отображения пункта меню
      icon: 'home', // иконка пункта меню
      color: '#333' // цвет именно этого пункта меню
    }
  ],
  value: '',
  hint: '',
  changeValue: () => {},
  submitValue: () => {},
  clearValue: () => {},
  styles: [
    {
      self: [],
      title: [],
      menu: [],
      menuItem: [],
      searchText: [],
      searchHint: []
    }
  ]
}
