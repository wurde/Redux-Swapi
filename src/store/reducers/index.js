'use strict'

/**
 * Dependencies
 */

const redux = require('redux')
const starWarsReducer = require('./starWarsReducer')

/**
 * Constants
 */

const combineReducers = redux.combineReducers

/**
 * Export reducers
 */

module.exports = combineReducers({
  starWarsReducer
})
