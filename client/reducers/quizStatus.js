import { QUIZ_STARTING, QUIZ_ENDED, QUIZ_RESET } from '../actions'

const quizStatus = (quizStatus = 'waiting', action) => {
  switch (action.type) {
    case QUIZ_STARTING:
      return 'inProgress'

    case QUIZ_ENDED:
      return 'ended'

    case QUIZ_RESET:
      return 'waiting'

    default:
      return quizStatus
  }
}

export default quizStatus
