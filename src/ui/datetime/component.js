import React from 'react'
import { clone } from 'ramda'

/**
 * @param {(Object|Number)} value
 * @returns {Date}
 * @ignore
 * @private
 */
function parseDate(value) {
  if (typeof value === 'number') {
    return new Date(value)
  }
  return value && value.toDate()
}

export default Component => ({ viewState }) => {
  const {
    id = 'datetime',
    visibility = true,
    displayType,
    title,
    readonly,
    mergedStyle,
    mergedActiveStyle,
    mergedDisabledStyle,
    isFloatingTitle,
    error,
    kind,
    minDate,
    maxDate,
    value,
    format,
    okLabel,
    cancelLabel,
    onChangeFunc,
    locale,
    extendedSettings = {}
  } = viewState

  if (!visibility) return null

  return (
    <Component
      id={id}
      displayType={displayType}
      title={title}
      isFloatingTitle={isFloatingTitle}
      readonly={readonly}
      error={error}
      kind={kind}
      style={clone(mergedStyle)}
      activeStyle={clone(mergedActiveStyle)}
      disabledStyle={clone(mergedDisabledStyle)}
      minDate={parseDate(minDate)}
      maxDate={parseDate(maxDate)}
      value={parseDate(value)}
      okLabel={okLabel}
      cancelLabel={cancelLabel}
      format={format}
      onChange={onChangeFunc}
      extendedSettings={extendedSettings}
      locale={locale} // приходит из hoc
    />
  )
}
