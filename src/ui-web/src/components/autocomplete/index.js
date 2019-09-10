import React, { memo, useCallback, useState, useMemo, useEffect, useRef } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const noop = () => {}

const getOptionLabel = option => (option ? option.title || option.value : '')

const filterOption = (value, searchText) =>
  getOptionLabel(value)
    .trim()
    .toLowerCase()
    .includes(searchText.toLowerCase())

// from material-ui styles. if this component placed into dialog component, suggestions will display below backdrop. this style fix problem
const suggestionsContainerStyle = { zIndex: 1300 }

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
    isSuggestionsOpened,
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
    onSubmitAction = noop,
    Input
  }) => {
    const [filteredData, setFilteredData] = useState(data)
    const [query, setQuery] = useState(getOptionLabel(value))
    const inputRef = useRef(null)

    useEffect(() => {
      setFilteredData(data)
    }, [data])

    useEffect(() => {
      setQuery(getOptionLabel(value))
      setFilteredData([])
    }, [value])

    const onChange = useCallback(text => {
      setFilteredData(filteredData.filter(value => filterOption(value, text)))
      setQuery(text)

      onChangeFunc(text)
      openSuggestions()
    })

    const onItemClick = useCallback(item => {
      setQuery(item.title || item.value)

      onSelectFunc(text)
      openSuggestions()
    })

    return (
      <div>
        <Input
          id={id}
          title={title}
          style={style.autocompleteInput}
          value={query}
          readonly={readonly}
          error={error}
          onChange={onChange}
          inputRef={inputRef}
          isFloatingTitle={isFloatingTitle}
          kind={kind}
        />
        <Popper anchorEl={inputRef.current} open={isSuggestionsOpened} style={suggestionsContainerStyle}>
          <Paper
            square
            style={Object.assign({}, { width: inputRef.current ? inputRef.current.clientWidth : null }, style.self[0])}
          >
            <ClickAwayListener onClickAway={closeSuggestions}>
              <div>
                {filteredData.map(item => (
                  <MenuItem id={item.id} key={item.id} onClick={onItemClick(item)} style={style.listItem.self[0]}>
                    <span style={style.listItem.title[0]}>{getOptionLabel(item)}</span>
                  </MenuItem>
                ))}
              </div>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    )
  }
)

export default {
  type: 'view',
  name: 'autocomplete',
  create: ({ input, withViewHOC }) => withViewHOC(Autocomplete, { Input: input })
}
