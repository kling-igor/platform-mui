import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id = 'input',
    visibility = true,
    title,
    returnKeyType,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    value,
    inputType,
    readonly,
    error,
    isFloatingTitle,
    kind,
    lines,
    isRightIconEnabled,
    rightIcon,
    rightIconClick,
    catchRef,
    onChangeText,
    onFocusAction,
    onBlurAction,
    onSubmitAction
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      title={title}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      value={value}
      lines={lines}
      inputType={inputType}
      readonly={readonly}
      error={error}
      returnKeyType={returnKeyType}
      isFloatingTitle={isFloatingTitle}
      kind={kind}
      isRightIconEnabled={isRightIconEnabled}
      rightIcon={rightIcon}
      rightIconClick={rightIconClick}
      catchRef={catchRef}
      // onChange={onChangeText}
      // onFocus={onFocusAction}
      // onBlur={onBlurAction}
      // onSubmit={onSubmitAction}
    />
  )
}
