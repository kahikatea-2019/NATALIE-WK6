import React from 'react'
import { connect } from 'react-redux'

import Result from './Result'

import { quiz } from '../../data/data'

const ResultContainer = props => {
  const possibleResults = quiz.results
  const { chosenAnswers } = props
  const resultList = calculateResult(chosenAnswers, possibleResults)
  const resultsDisplay = resultList.map(result => (
    <Result key={result} result={result} />
  ))
  return (
      <>
        {resultsDisplay}
      </>
  )
}

function calculateResult (chosenAnswers, results) {
  const answerTotals = []

  results.forEach(result => {
    answerTotals.push({
      title: result.title,
      total: chosenAnswers.filter(answer => answer === result.title).length
    })
  })

  let maxTotal = 0
  let maxTitle = []

  answerTotals.forEach(obj => {
    if (obj.total > maxTotal) {
      maxTotal = obj.total
      maxTitle = [ obj.title ]
    } else if (obj.total === maxTotal) {
      maxTitle.push(obj.title)
    }
  })
  return maxTitle
}

function mapStateToProps (state) {
  return {
    chosenAnswers: state.chosenAnswers
  }
}

export default connect(mapStateToProps)(ResultContainer)
