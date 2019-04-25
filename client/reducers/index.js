import { combineReducers } from 'redux'

import chosenAnswers from './chosenAnswers'
import activeQuestion from './activeQuestion'

export default combineReducers({
  chosenAnswers,
  activeQuestion
})
