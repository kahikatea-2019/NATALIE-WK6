import React from 'react'
import { connect } from 'react-redux'

import { logAnswer } from '../actions'

class Question extends React.Component {
  render () {
    const { dispatch, activeQuestion } = this.props
    return (
      <div>
        <h1>HIII</h1>
        <p>{activeQuestion}</p>
        <button onClick={() => dispatch(logAnswer('Emily'))}>Log answer</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeQuestion: state.activeQuestion
  }
}

export default connect(mapStateToProps)(Question)
