import { NEXT_QUESTION } from '../actions/index'

const activeQuestion = (activeQuestion = 0, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return activeQuestion + 1

    default:
      return activeQuestion
  }
}

export default activeQuestion
