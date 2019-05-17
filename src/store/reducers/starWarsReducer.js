'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  characters: [],
  isFetching: false,
  err: ''
}

/**
 * Define reducer
 */

function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_CHAR_START:
      return {
        isFetching: true,
        characters: [],
        err: ''
      }
    case actions.FETCH_CHAR_SUCCESS:
      return {
        isFetching: false,
        characters: action.payload,
        err: ''
      }
    case actions.FETCH_CHAR_ERROR:
      return {
        isFetching: false,
        characters: [],
        err: action.payload
      }
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = starWarsReducer
