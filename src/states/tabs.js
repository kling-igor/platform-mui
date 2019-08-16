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
    },
    {
      id: 'tab_3',
      visibility: true,
      screen: 'Tab3',
      title: 'Tab3',
      badge: 5
    }
  ],
  selectedTab: 'tab_2',
  styles: [
    {
      // Стили для всего компонента, включая контент
      self: [{ backgroundColor: 'yellowgreen', color: 'black' }],
      // Стили для таббара
      tabBar: [
        {
          // flexGrow: 1 // чтобы табины были по всей ширине
        }
      ],
      // Стили для активной табины (кнопки на таббаре)
      tab: [
        {
          // flexGrow: 1 // чтобы табины были по всей ширине
        }
      ],
      // Стили для заголовков табин
      title: [],
      // Стили для индикатора выбранной табины
      inkBar: [{ backgroundColor: 'purple', height: '3px' }],
      // Стили для бэйджа
      badge: [{ backgroundColor: 'black' }],
      // Стили для числа внутри бэйджа
      badgeText: [{ color: 'yellow' }]
    }
  ]
}
