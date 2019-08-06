export default {
  type: 'toggle',
  id: 'mytoggle',
  visibility: true,
  title: 'SwitchMe',
  iconPlacement: 'start', // start, end
  value: false,
  readonly: false,
  onChangeFunc: () => {},
  styles: [
    {
      self: [],
      thumb: [
        {
          backgroundColor: '#f00'
        }
      ],
      thumbSwitched: [
        {
          backgroundColor: '#f0f'
        }
      ],
      track: [
        {
          backgroundColor: '#0f0'
        }
      ],
      trackSwitched: [
        {
          backgroundColor: '#00f'
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [],
      thumb: [],
      thumbSwitched: [],
      track: [],
      trackSwitched: []
    }
  ],
  disabledStyles: [
    {
      self: [],
      thumb: [],
      thumbSwitched: [],
      track: [],
      trackSwitched: []
    }
  ]
}
