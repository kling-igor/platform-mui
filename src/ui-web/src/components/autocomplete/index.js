import React, { memo } from 'react'

const noop = () => {}

const Autocomplete = memo(
  ({
    id,
    style,
    activeStyle,
    disabledStyle,
    title,
    isFloatingTitle,
    readonly,
    error,
    kind,
    mode,
    isLoading,
    data,
    value,
    catchRef = noop,
    openSuggestions = noop,
    closeSuggestions = noop,
    onSelectFunc = noop,
    onChangeFunc = noop,
    onFocusAction = noop,
    onBlurAction = noop,
    onSubmitAction = noop
  }) => {
    return null
  }
)

export default {
  type: 'view',
  name: 'autocomplete',
  create: ({ input, withViewHOC }) => withViewHOC(Autocomplete, { Input: input })
}
