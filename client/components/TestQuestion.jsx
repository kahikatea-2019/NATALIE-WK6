import React from 'react'
import { logAnswer, quizStart, quizEnd, quizReset } from '../actions'
import { connect } from 'react-redux'

class TestQuestion extends React.Component {
  render () {
    const { dispatch, activeQuestion, quizStatus } = this.props
    return (
      <div>
        <button onClick={() => dispatch(logAnswer('Bryce'))}>x</button>
        <p>{activeQuestion}</p>
        <button onClick={() => dispatch(quizStart())}>start</button>
        <p>{activeQuestion}</p>
        <p>{quizStatus}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeQuestion: state.activeQuestion,
    quizStatus: state.quizStatus
  }
}

export default connect(mapStateToProps)(TestQuestion)
