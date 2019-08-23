import React from 'react'
import { clone } from 'ramda'

export default Component => ({ viewState }) => {
  const {
    id,
    visibility,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    title,
    isFloatingTitle,
    readonly,
    error,
    isSuggestionsOpened,
    kind,
    mode,
    isLoading,
    returnKeyType,
    data,
    value,
    catchRef,
    openSuggestions,
    closeSuggestions,
    onSelectFunc,
    onChangeFunc,
    onFocusAction,
    onBlurAction,
    onSubmitAction
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      title={title}
      isFloatingTitle={isFloatingTitle}
      readonly={readonly}
      error={error}
      kind={kind}
      mode={mode}
      isLoading={isLoading}
      data={data}
      value={value}
      // onSelectFunc={onSelectFunc}
      // onChangeFunc={onChangeFunc}
      isSuggestionsOpened={isSuggestionsOpened}
      // openSuggestions={openSuggestions}
      // closeSuggestions={closeSuggestions}
      // catchRef={catchRef}
      // onFocus={onFocusAction}
      // onBlur={onBlurAction}
      // onSubmit={onSubmitAction}
      returnKeyType={returnKeyType}
    />
  )
}
