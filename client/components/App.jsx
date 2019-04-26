import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import Header from './Header'
import Footer from './Footer'
import StartQuiz from './StartQuiz'
import Result from './ResultContainer'

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
      {quizStatus === 'ended' && <Result />}

    </Grid>
  )
}

function mapStateToProps (state) {
  return {
    quizStatus: state.quizStatus
  }
}

export default connect(mapStateToProps)(App)
