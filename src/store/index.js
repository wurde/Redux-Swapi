'use strict'

/**
 * Dependencies
 */

const redux = require('redux')
const redux_logger = require('redux-logger')
const redux_thunk = require('redux-thunk')
const reducers = require('./reducers/index')

/**
 * Constants
 */

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

/**
 * Define store
 */

const store = createStore(
  reducers,
  applyMiddleware(
    redux_logger.logger,
    redux_thunk.thunk
  )
)

/**
 * Export store
 */

module.exports = store
