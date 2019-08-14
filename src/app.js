import { hot } from 'react-hot-loader/root'
import React, { PureComponent } from 'react'
import states from './states'
import components from './ui'
import withViewHOC from './ui/utils/withViewHOC'
import * as uikit from './ui-web/src'
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

function useWidget(widget) {
  Object.defineProperty(widgets, widget.name, {
    enumerable: true,
    configurable: true,
    get: () => widget.create(views)
  })
}

usePlugin(withViewHOC)
// конкретные web-имплементации
Object.values(uikit).forEach(usePlugin)
// ui-обертки работающие с viewState
Object.values(components).forEach(useWidget)

const WebRoot = views.root

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

// TODO: change state to draw specified component
class App extends PureComponent {
  render() {
    return <WebRoot theme={theme}>{renderNode(states.input)}</WebRoot>
  }
}

export default hot(App)
