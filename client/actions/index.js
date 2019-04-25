export const LOG_ANSWER = 'LOG_ANSWER'

export const logAnswer = (answerWeighting) => {
  return {
    type: LOG_ANSWER,
    weighting: answerWeighting
  }
}
