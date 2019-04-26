import React from 'react'
import { connect } from 'react-redux'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { quizStart } from '../actions'

class StartQuiz extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <>
      <Grid
        container
        justify="center">
        <Typography justify="center" color='primary' id='header' variant="h2" gutterBottom
          onClick={() => dispatch(quizStart())}>
          Which EDA staff member are you?
        </Typography>
      </Grid>
      </>
    )
  }
}

export default connect()(StartQuiz)
