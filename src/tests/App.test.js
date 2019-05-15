'use strict'

/**
 * Dependencies
 */

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('../App')

/**
 * Assertions
 */

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
