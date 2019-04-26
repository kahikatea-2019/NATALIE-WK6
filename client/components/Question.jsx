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
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
}

function Question (props) {
  const { classes } = props
  const quizAnswers = question.options.map(item =>
    <Button
      key={item.answer}
      fullWidth={true}
      size="medium"
      color='secondary'>
      {item.answer}
    </Button>
  )

  return (
    <Card color='primary' className={classes.card}>
      <CardContent title='question'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Question:
        </Typography>
        <Typography variant="h5" component="h2">
          {question.text}
        </Typography>
      </CardContent>
      <CardActions>
        <ul>
          {quizAnswers}
        </ul>
      </CardActions>
    </Card>
  )
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Question)
