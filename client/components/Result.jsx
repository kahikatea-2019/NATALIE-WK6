import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { quiz } from '../../data/data'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
}

const resultsCard = quiz.results[0]

function Result (props) {
  const { classes } = props

  return (
    <Card className={classes.card}>
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
        <Button size="large" color="primary">
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

export default withStyles(styles)(Result)

