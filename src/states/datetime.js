export default {
  id: 'appbar',
  type: 'datetime',
  displayType: 'datetime', // date, time, datetime
  visibility: true,
  title: null,
  isFloatingTitle: false,
  kind: 'flat', // flat, outlined
  readonly: false,
  minDate: null,
  maxDate: null,
  value: null,
  format: 'DD.MM.YYYY HH:mm',
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  error: null,
  onChangeFunc: () => {},
  styles: [
    {
      self: [],
      text: [],
      error: []
    }
  ],
  activeStyles: [
    {
      self: [],
      text: [],
      error: []
    }
  ],
  disabledStyles: [
    {
      self: [],
      text: [],
      error: []
    }
  ]
}
