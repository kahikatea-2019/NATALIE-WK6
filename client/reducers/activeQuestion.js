import { NEXT_QUESTION, QUIZ_RESET } from '../actions/index'

const activeQuestion = (activeQuestion = 0, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return activeQuestion + 1

    case QUIZ_RESET:
      return 0

    default:
      return activeQuestion
  }
}

export default activeQuestion
