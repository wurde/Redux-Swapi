'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const store = require('./store/index')
const views = require('./views/index')

/**
 * Constants
 */

const Provider = react_redux.Provider
const CharacterListView = views.CharacterListView

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <CharacterListView />
    </Provider>
  )
}

/**
 * Export component
 */

module.exports = App
