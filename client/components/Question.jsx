import React from 'react'
import { connect } from 'react-redux'

import { logAnswer, checkQuizStatus } from '../actions'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { quiz } from '../../data/data'

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

const shuffle = (array) => {
  return array.map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}
const shuffledQuiz = {}
shuffledQuiz.questions = quiz.questions.map(question => {
  question.options = shuffle(question.options)
  return question
}
)

function Question (props) {
  const { classes, dispatch, activeQuestion } = props
  const question = shuffledQuiz.questions[activeQuestion]
  const totalQuestions = shuffledQuiz.questions.length
  const quizAnswers = question.options.map(item =>
    <Button
      key={item.answer}
      fullWidth={true}
      size="medium"
      onClick={() => {
        dispatch(logAnswer(item.weighting))
        dispatch(checkQuizStatus(activeQuestion, totalQuestions))
      }}
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

function mapStateToProps (state) {
  return {
    activeQuestion: state.activeQuestion,
    quizStatus: state.quizStatus
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Question))
