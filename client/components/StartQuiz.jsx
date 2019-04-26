import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import { quizStart } from '../actions'

class Header extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <>
      <Grid
        container
        justify="center">
        <Typography justify="center" color='primary' className='header' variant="h1" gutterBottom
          onClick={() => dispatch(quizStart())}>
          START QUIZ
        </Typography>
      </Grid>
      </>
    )
  }
}

export default connect()(Header)
