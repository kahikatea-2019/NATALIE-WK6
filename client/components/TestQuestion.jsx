import React from 'react'
import { logAnswer, quizStart, quizEnd, quizReset, nextAnswer, nextQuestion, checkQuizStatus } from '../actions'
import { connect } from 'react-redux'

class TestQuestion extends React.Component {
  render () {
    const { dispatch, activeQuestion, quizStatus } = this.props
    return (
      <div>
        <button onClick={() => dispatch(logAnswer('Bryce'))}>x</button>
        <button onClick={() => dispatch(checkQuizStatus(activeQuestion, 4))}>Check</button>
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
