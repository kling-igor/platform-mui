export default {
  type: 'input',
  id: 'input',
  visibility: true,
  title: 'Password',
  value: 'some input',
  isFloatingTitle: true,
  returnKeyType: 'done', // done, go, next, search, send
  styles: [
    {
      self: [
        {
          backgroundColor: 'yellow',
          width: 'calc(100% - 48px)',
          margin: 24
        }
      ],
      error: [],
      hint: [{ color: 'black' }],
      text: [{ underline: true, color: 'blue' }]
    }
  ],
  activeStyles: [{ self: [], error: [], hint: [], text: [] }],
  disabledStyles: [{ self: [], error: [], hint: [], text: [] }],
  inputType: 'password', // text, numeric, password
  kind: 'flat', // flat, outlined, fallback
  lines: 1,
  readonly: false,
  error: null,
  isRightIconEnabled: true,
  rightIcon: 'visibility_off', // visibility, visibility_off
  rightIconClick: () => {},
  catchRef: ref => {},
  onChangeText: text => {},
  onFocusAction: () => {},
  onBlurAction: () => {},
  onSubmitAction: () => {}
}
