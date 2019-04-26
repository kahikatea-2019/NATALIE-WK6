import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import Header from './Header'
import Footer from './Footer'
import StartQuiz from './StartQuiz'
import Result from './Result'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const App = props => {
  const { quizStatus } = props
  return (
    <Grid>
      <StartQuiz />
      <Header />
      {quizStatus === 'waiting' && <StartQuiz />}
      {quizStatus === 'inProgress' && <Question />}
      {quizStatus === 'ended' && <Result />}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </Grid>
  )
}

function mapStateToProps (state) {
  return {
    quizStatus: state.quizStatus
  }
}

export default connect(mapStateToProps)(App)
