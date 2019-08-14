export default {
  type: 'input',
  id: 'input',
  visibility: true,
  title: 'Hint',
  value: 'some input',
  isFloatingTitle: true,
  returnKeyType: 'done', // done, go, next, search, send
  styles: [{ self: [], error: [], hint: [], text: [] }],
  activeStyles: [{ self: [], error: [], hint: [], text: [] }],
  disabledStyles: [{ self: [], error: [], hint: [], text: [] }],
  inputType: 'text', // text, numeric, password
  kind: 'flat', // flat, outlined, fallback
  lines: 1,
  readonly: false,
  error: undefined,
  isRightIconEnabled: false,
  rightIcon: 'eye',
  rightIconClick: () => {},
  catchRef: ref => {},
  onChangeText: text => {},
  onFocusAction: () => {},
  onBlurAction: () => {},
  onSubmitAction: () => {}
}
