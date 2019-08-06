export default {
  type: 'button',
  id: 'mybutton',
  visibility: true,
  title: 'Home',
  kind: 'text', //text, outlined, contained, icon, custom
  loading: true,
  readonly: false,
  icon: 'home',
  onPress: () => {
    console.log('PRESS')
  },
  styles: [
    {
      self: [
        {
          backgroundColor: '#00f',
          borderWidth: '3px',
          borderRadius: 4,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: '#f00',
          textTransform: 'uppercase' // none, capitalize, lowercase, uppercase
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [
        {
          backgroundColor: '#ff0',
          borderRadius: 2,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: 'rgba(0,0,0,0.6)'
        }
      ]
    }
  ],
  disabledStyles: [
    {
      self: [
        {
          backgroundColor: 'lightgray',
          borderRadius: 2,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: 'white'
        }
      ]
    }
  ]
}
