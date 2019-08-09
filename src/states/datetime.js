export default {
  id: 'appbar',
  type: 'datetime',
  displayType: 'time', // date, time, datetime
  visibility: true,
  title: 'Input date',
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
  extendedSettings: {
    // views: ['year', 'month'], // показать только выбор года и месяца (по умолчанию 'date')
    // helperText: 'Start from year selection', // вспомогательный подстрочный текст
    inputVariant: 'outlined', // тип input ("standard" | "outlined" | "filled")
    autoOk: true,
    orientation: 'portrait' //"portrait" | "landscape"
    // variant: 'inline' - будет показан не в центре экрана, а сразу под полем ввода
  },
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
