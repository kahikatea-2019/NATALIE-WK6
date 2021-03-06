import React from 'react'
import { connect } from 'react-redux'

// Material UI imports
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { quizReset } from '../actions'

import { quiz } from '../../data/data'

const styles = {
  card: {
    maxWidth: 450
  },
  media: {
    height: 360
  }
}

function Result (props) {
  const resultsCard = quiz.results.find(result => result.title === props.result)
  const { classes, dispatch } = props

  return (
    <Card className={classes.card} m={10}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={resultsCard.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" >
            {resultsCard.title}
          </Typography>
          <Typography component="p">
            {resultsCard.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" onClick={() => dispatch(quizReset())}>
          Take the quiz again
        </Button>
        <Button size="large" color="primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Make a formal complaint
        </Button>
      </CardActions>
    </Card>
  )
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect()(withStyles(styles)(Result))
