export const LOG_ANSWER = 'LOG_ANSWER'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const QUIZ_STARTING = 'QUIZ_STARTING'
export const QUIZ_ENDED = 'QUIZ_ENDED'
export const QUIZ_RESET = 'QUIZ_RESET'

export const logAnswer = (answerWeighting) => {
  return {
    type: LOG_ANSWER,
    weighting: answerWeighting
  }
}

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  }
}

export const quizStart = () => {
  return {
    type: QUIZ_STARTING
  }
}

export const quizEnd = () => {
  return {
    type: QUIZ_ENDED
  }
}

export const quizReset = () => {
  return {
    type: QUIZ_RESET
  }
}

export function checkQuizStatus (activeQuestion, totalQuestions) {
  return (dispatch) => {
    if (activeQuestion === totalQuestions) {
      dispatch(quizEnd())
    } else {
      dispatch(nextQuestion())
    }
  }
}
