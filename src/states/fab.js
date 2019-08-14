// actually does not exist
// driven by OverlayManager
export default {
  id: 'myfab',
  type: 'fab',
  icon: 'home',
  styles: [
    {
      self: [{ backgroundColor: '#ff0', bottom: 30 }],
      icon: [{ color: 'green' }],
      disabled: [{ backgroundColor: '#f0f' }]
    }
  ],
  readonly: true,
  hasShadow: false,
  onClick: () => {}
}
