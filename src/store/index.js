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

// TODO add redux-thunk middleware
const store = createStore(reducers, applyMiddleware(redux_logger.logger))

/**
 * Export store
 */

module.exports = store
