import React, { PureComponent } from 'react'
import * as uikit from './ui-web/src'
import components from './ui'
import theme from './theme'
import StyleService from './StyleService'

const logger = {
  log: (...args) => console.log(...args)
}

const inMemoryStorage = {
  put: (tag, id, style) => {},
  get: (tag, id) => {}
}

const configuration = {
  getConfig: async () => []
}

const styleService = StyleService.config({ theme }).create({ configuration, inMemoryStorage, logger })

const views = {}

const widgets = {}

function usePlugin(plugin) {
  Object.defineProperty(views, plugin.name, {
    enumerable: true,
    configurable: true,
    get: () => plugin.create(views)
  })
}

function use(plugin) {
  if (Array.isArray(plugin)) {
    plugin.forEach(usePlugin)
  } else {
    usePlugin(plugin)
  }
}

use(Object.values(uikit))

function useWidget(widget) {
  Object.defineProperty(widgets, widget.name, {
    enumerable: true,
    configurable: true,
    get: () => widget.create(views)
  })
}

Object.values(components).forEach(widget => useWidget(widget))

const WebRoot = views.root

const buttonState = {
  type: 'button',
  id: 'mybutton',
  visibility: true,
  title: 'Button',
  kind: 'contained', //text, outlined, contained, custom
  loading: false,
  readonly: false,
  icon: undefined,
  styles: [{ self: [{}], label: [{}] }],
  activeStyles: [{ self: [{}], label: [{}] }],
  disabledStyles: [{ self: [{}], label: [{}] }]
}

const renderNode = viewState => {
  const { type, styles, activeStyles, disabledStyles } = viewState

  const Node = widgets[type]
  if (!Node) {
    console.error('unable to find widget for type:', type)
    return null
  }

  const state = {
    ...viewState,
    mergedStyle: styleService.mergeStyles(type, styles),
    mergedActiveStyle: styleService.mergeStyles(type, activeStyles),
    mergedDisabledStyle: styleService.mergeStyles(type, disabledStyles)
  }

  return <Node viewState={state} />
}

export default class App extends PureComponent {
  render() {
    return <WebRoot theme={theme}>{renderNode(buttonState)}</WebRoot>
  }
}
