'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
}

/**
 * Define reducer
 */

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = starWarsReducer
