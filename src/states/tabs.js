export default {
  id: 'tabs',
  type: 'tabs',
  visibility: true,
  scrollable: false,
  elements: [
    {
      id: 'tab_1',
      visibility: true,
      screen: 'Tab1',
      title: 'Tab1',
      badge: 0
    },
    {
      id: 'tab_2',
      visibility: true,
      screen: 'Tab2',
      title: 'Tab2',
      badge: 0
    }
  ],
  selectedTab: 0,
  styles: [
    {
      // Стили для всего компонента, включая контент
      self: [],
      // Стили для таббара
      tabBar: [],
      // Стили для активной табины (кнопки на таббаре)
      tab: [],
      // Стили для заголовков табин
      title: [],
      // Стили для индикатора выбранной табины
      inkBar: [],
      // Стили для бэйджа
      badge: [],
      // Стили для числа внутри бэйджа
      badgeText: []
    }
  ]
}
