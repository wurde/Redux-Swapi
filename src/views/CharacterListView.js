'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const components = require('../components/index')
const actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const CharacterList = components.CharacterList
const Title = components.Title
const getCharacters = actions.getCharacters

/**
 * Define view component
 */

class CharacterListView extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    console.log("this.props.isFetching", this.props.isFetching)
    if (this.props.isFetching) {
      return <p>Loading characters...</p>
    }

    return (
      <div className="CharactersList_wrapper">
        <Title text="Character List" />
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = state => {
  console.log('state', state)
  return {
    characters: state.starWarsReducer.characters,
    isFetching: state.starWarsReducer.isFetching
  }
}

/**
 * Export view component
 */

module.exports = connect(mapStateToProps, { getCharacters })(CharacterListView)
