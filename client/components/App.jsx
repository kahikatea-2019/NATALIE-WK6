import React from 'react'
import TestQuestion from './TestQuestion'
import Question from './Question'
import Header from './Header'
import Footer from './Footer'
import StartQuiz from './StartQuiz'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const App = () => (
  <Grid>
    <StartQuiz />
    <Header />
    <Question />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Footer />
  </Grid>
)

export default App
