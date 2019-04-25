import { LOG_ANSWER } from '../actions/index'

const chosenAnswers = (chosenAnswers = [], action) => {
  switch (action.type) {
    case LOG_ANSWER:
      return [
        ...chosenAnswers,
        action.weighting
      ]

    default:
      return chosenAnswers
  }
}

export default chosenAnswers
