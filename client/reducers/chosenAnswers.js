import { LOG_ANSWER, QUIZ_RESET } from '../actions/index'

const chosenAnswers = (chosenAnswers = [], action) => {
  switch (action.type) {
    case LOG_ANSWER:
      return [
        ...chosenAnswers,
        action.weighting
      ]

    case QUIZ_RESET:
      return []

    default:
      return chosenAnswers
  }
}

export default chosenAnswers
