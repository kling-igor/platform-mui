export default {
  id: 'bottomnavigation',
  visibility: true,
  styles: [
    {
      self: [],
      tab: {
        self: [],
        icon: [],
        image: [],
        label: []
      },
      selectedTab: {
        self: [],
        icon: [],
        image: [],
        label: []
      }
    }
  ],
  selectedTab: 0,
  elements: [
    {
      id: 'tab1',
      screen: 'Screen1',
      title: 'Tab1',
      icon: 'account'
      // image: '',
      // imageSelected:''
    },
    {
      id: 'tab2',
      screen: 'Screen2',
      title: 'Tab2',
      icon: 'home'
      // image: '',
      // imageSelected:''
    }
  ]
}
