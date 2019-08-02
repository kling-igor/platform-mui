import { hot } from 'react-hot-loader/root'
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

function useWidget(widget) {
  Object.defineProperty(widgets, widget.name, {
    enumerable: true,
    configurable: true,
    get: () => widget.create(views)
  })
}

Object.values(uikit).forEach(usePlugin)
Object.values(components).forEach(useWidget)

const WebRoot = views.root

const buttonState = {
  type: 'button',
  id: 'mybutton',
  visibility: true,
  title: 'Home',
  kind: 'text', //text, outlined, contained, icon, custom
  loading: true,
  readonly: false,
  icon: 'home',
  onPress: () => {
    console.log('PRESS')
  },
  styles: [
    {
      self: [
        {
          backgroundColor: '#00f',
          borderWidth: '3px',
          borderRadius: 4,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: '#f00',
          textTransform: 'uppercase' // none, capitalize, lowercase, uppercase
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [
        {
          backgroundColor: '#ff0',
          borderRadius: 2,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: 'rgba(0,0,0,0.6)'
        }
      ]
    }
  ],
  disabledStyles: [
    {
      self: [
        {
          backgroundColor: 'lightgray',
          borderRadius: 2,
          borderWidth: 0
        }
      ],
      label: [
        {
          color: 'white'
        }
      ]
    }
  ]
}

const checkboxState = {
  type: 'checkbox',
  id: 'mycheckbox',
  visibility: true,
  title: 'CheckMe',
  iconPlacement: 'start', // start, end
  value: true,
  readonly: false,
  onChangeFunc: () => {},
  styles: [
    {
      self: [{}],
      icon: [
        {
          color: '#0f0'
        }
      ],
      title: [
        {
          color: '#f00'
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [{}],
      icon: [{}],
      title: [{}]
    }
  ],
  disabledStyles: [
    {
      self: [{}],
      icon: [{}],
      title: [{}]
    }
  ]
}

const toggleState = {
  type: 'toggle',
  id: 'mytoggle',
  visibility: true,
  title: 'SwitchMe',
  iconPlacement: 'start', // start, end
  value: false,
  readonly: false,
  onChangeFunc: () => {},
  styles: [
    {
      self: [{}],
      thumb: [
        {
          backgroundColor: '#f00'
        }
      ],
      thumbSwitched: [
        {
          backgroundColor: '#f0f'
        }
      ],
      track: [
        {
          backgroundColor: '#0f0'
        }
      ],
      trackSwitched: [
        {
          backgroundColor: '#00f'
        }
      ]
    }
  ],
  activeStyles: [
    {
      self: [{}],
      thumb: [{}],
      thumbSwitched: [{}],
      track: [{}],
      trackSwitched: [{}]
    }
  ],
  disabledStyles: [
    {
      self: [{}],
      thumb: [{}],
      thumbSwitched: [{}],
      track: [{}],
      trackSwitched: [{}]
    }
  ]
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

class App extends PureComponent {
  render() {
    return <WebRoot theme={theme}>{renderNode(toggleState)}</WebRoot>
  }
}

export default hot(App)
