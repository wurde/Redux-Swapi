'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Character = require('./Character')

/**
 * Define component
 */

const CharacterList = props => {
  console.log('props.characters', props.characters)

  if (props.characters) {
    return (
      <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />
      })}
      </ul>
    )
  } else {
    return (<p>No characters found</p>)
  }
}

/**
 * Export component
 */

module.exports = CharacterList
