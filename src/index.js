import React from 'react'
import ReactDOM from 'react-dom'
import PatchedReactDOM from '@hot-loader/react-dom'
import App from './app'

// render(<App />, document.getElementById('app'))
// if (process.env.REACT_DOM === 'patched') {
// PatchedReactDOM.render(<App />, document.getElementById('app'))
// } else {
ReactDOM.render(<App />, document.getElementById('app'))
// }
