export default {
  type: 'checkbox',
  id: 'mycheckbox',
  visibility: true,
  title: 'CheckMe',
  iconPlacement: 'start', // start, end
  value: true,
  readonly: false,
  onChangeFunc: () => {},
  styles: [
    {
      self: [],
      icon: [
        {
          color: '#0f0'
        }
      ],
      title: [
        {
          color: '#f00'
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [],
      icon: [],
      title: []
    }
  ],
  disabledStyles: [
    {
      self: [],
      icon: [],
      title: []
    }
  ]
}
