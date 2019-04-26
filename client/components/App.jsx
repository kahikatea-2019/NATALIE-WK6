import React from 'react'
import { connect } from 'react-redux'

// components
import Question from './Question'
import StartQuiz from './StartQuiz'
import ResultContainer from './ResultContainer'

// Material UI imports
import Grid from '@material-ui/core/Grid'

const App = props => {
  const { quizStatus } = props
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignitems="center"
      className="display">
      {quizStatus === 'waiting' && <StartQuiz />}
      {quizStatus === 'inProgress' && <Question />}
      {quizStatus === 'ended' && <ResultContainer />}

    </Grid>
  )
}

function mapStateToProps (state) {
  return {
    quizStatus: state.quizStatus
  }
}

export default connect(mapStateToProps)(App)
