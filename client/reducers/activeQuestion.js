import { LOG_ANSWER } from '../actions/index'

const activeQuestion = (activeQuestion = 0, action) => {
  switch (action.type) {
    case LOG_ANSWER:
      return activeQuestion + 1

    default:
      return activeQuestion
  }
}

export default activeQuestion
