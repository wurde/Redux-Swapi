'use strict'

/**
 * Dependencies
 */

const axios = require('axios')

/**
 * Constants
 */

const FETCH_CHAR_START = 'FETCH_CHAR_START'
const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS'
const FETCH_CHAR_ERROR = 'FETCH_CHAR_ERROR'

/**
 * Define actions
 */

const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHAR_START })

  axios.get('https://swapi.co/api/people')
    .then(res => dispatch({ type: FETCH_CHAR_SUCCESS, payload: res.data.results }))
    .catch(err => dispatch({ type: FETCH_CHAR_ERROR, payload: err }))
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

/**
 * Export actions
 */

module.exports = {
  FETCH_CHAR_START: FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS: FETCH_CHAR_SUCCESS,
  FETCH_CHAR_ERROR: FETCH_CHAR_ERROR,
  getCharacters: getCharacters,
}
