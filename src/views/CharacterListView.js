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

/**
 * Define view component
 */

class CharacterListView extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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

const mapStateToProps = (state) => {
  // TODO our mapStateToProps needs to have two properties inherited from state
  // the characters and the fetching boolean
  return state
}

/**
 * Export view component
 */

module.exports = connect(mapStateToProps, {})(CharacterListView)
