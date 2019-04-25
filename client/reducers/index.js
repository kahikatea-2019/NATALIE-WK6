import { combineReducers } from 'redux'

import chosenAnswers from './chosenAnswers'
import activeQuestion from './activeQuestion'
import quizStatus from './quizStatus'

export default combineReducers({
  chosenAnswers,
  activeQuestion,
  quizStatus
})
