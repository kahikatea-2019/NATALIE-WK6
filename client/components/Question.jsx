import React from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { quiz } from '../../data/data'

const question = quiz.questions[0]

// questions
// { text '', options [ {answer '', weighting ''}
// ,{answer '', weighting ''},
// {answer '', weighting ''}]}
// Need to get the text, then need to access options array, and get the answers value for each item, could res.body

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

function Question (props) {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Question:
        </Typography>
        <Typography variant="h5" component="h2">
          {question.text}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button fullWidth={true}
          size="medium">Dog</Button>

        <Button fullWidth={true}
          size="medium">Wolf</Button>
        <Button fullWidth={true}
          size="medium">I love all animals, they are my friends</Button>
        <Button fullWidth={true}
          size="medium">Ocelot</Button>
        <Button fullWidth={true}
          size="medium">Bear</Button>
      </CardActions>
    </Card>
  )
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Question)
