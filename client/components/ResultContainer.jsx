import React from 'react'
import { connect } from 'react-redux'
import { quiz } from '../../data/data'

import Result from './Result'

class ResultContainer extends React.Component {
  calculateResult (chosenAnswers, results) {
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

  render () {
    const { results } = quiz
    const { chosenAnswers } = this.props
    const resultList = this.calculateResult(chosenAnswers, results)
    const resultsDisplay = resultList.map(result => (
      <Result key={result} result={result} />
    ))
    return (
      <>
        {resultsDisplay}
      </>
    )
  }
}

function mapStateToProps (state) {
  return {
    chosenAnswers: state.chosenAnswers
  }
}

export default connect(mapStateToProps)(ResultContainer)
