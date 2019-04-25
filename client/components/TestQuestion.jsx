import React from 'react'
import { logAnswer } from '../actions'
import { connect } from 'react-redux'

class TestQuestion extends React.Component {
  render () {
    const { dispatch, activeQuestion } = this.props
    return (
      <div>
        <button onClick={() => dispatch(logAnswer('Bryce'))}>x</button>
        <p>{activeQuestion}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeQuestion: state.activeQuestion
  }
}

export default connect(mapStateToProps)(TestQuestion)
