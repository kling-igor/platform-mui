export default {
  id: 'appbar',
  type: 'appbar',
  title: 'Title',
  visibility: true,
  leftIcon: 'menu',
  leftClick: () => {},
  menuIcon: 'dots-vertical',
  menuItemClick: () => {},
  isSearching: true,
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
      self: [
        {
          backgroundColor: 'blue'
        }
      ],
      title: [],
      menu: [],
      menuItem: [],
      searchText: [],
      searchHint: []
    }
  ]
}
