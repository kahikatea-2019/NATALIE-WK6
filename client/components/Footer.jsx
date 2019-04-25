import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default class Footer extends React.Component {
  render () {
    return (
      <>
      <Grid container
        justify="center">
        <Typography className='header' variant="body2" gutterBottom>
          If you have any complaints regarding the content or results of this quiz, please consult Ete who was not available to screen this quiz for any potenital offenses. 
        </Typography>
      </Grid>
      </>
    )
  }
}
