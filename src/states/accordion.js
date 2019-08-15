export default {
  id: 'accordtion',
  type: 'accordion',
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  expanded: false,
  readonly: false,
  // leftIcon: {
  //   kind: 'icon', // icon | image
  //   icon: 'home', // или url картинки expand_less | expand_more
  //   size: 24,
  //   color: 'gray',
  //   fit: 'fill' // только для картинки
  // },
  // rightIcon: {
  //   kind: 'icon', // icon | image
  //   icon: 'expand_more', // или url картинки expand_less | expand_more
  //   size: 24,
  //   color: 'red',
  //   fit: 'fill' // только для картинки
  // },
  visibility: true,
  styles: [{ self: [], title: [{ color: 'blue' }], header: [], content: [], leftIcon: [], rightIcon: [] }],
  activeStyles: [{}],
  disabledStyles: [{}],
  elements: [
    {
      id: 'image',
      type: 'image',
      visibility: true,
      title: '',
      fit: 'contain',
      click: () => {},
      value: 'https://via.placeholder.com/300X200.png/0000FF/ffffff?text=Placeholder',
      styles: [
        {
          self: [
            {
              width: 200,
              height: 150
            }
          ]
        }
      ]
    }
  ],
  expand: () => {},
  collapse: () => {},
  onChange: () => {},
  toggle: () => {}
}
