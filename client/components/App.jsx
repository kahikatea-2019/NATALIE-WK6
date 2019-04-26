import React from 'react'
import Question from './Question'
import Header from './Header'
import Footer from './Footer'
import StartQuiz from './StartQuiz'

// Material UI imports
import Grid from '@material-ui/core/Grid'

const App = () => (

  <Grid
    container
    direction="row"
    justify="center"
    alignitems="center"
    className="display">
    <StartQuiz />
    <Header />
    <Question />

  </Grid>

)

export default App
