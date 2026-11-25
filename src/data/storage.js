export function recordsKey(bankId) {
  return `answerRecords-bank-${bankId}`
}

export function loadAnswerRecords(bankId) {
  try {
    return JSON.parse(localStorage.getItem(recordsKey(bankId)) || '{}')
  } catch {
    return {}
  }
}

export function saveAnswerRecords(bankId, records) {
  localStorage.setItem(recordsKey(bankId), JSON.stringify(records))
}

export function clearAnswerRecords(bankId) {
  localStorage.removeItem(recordsKey(bankId))
}

function markedQuestionsKey(bankId) {
  return `markedQuestions-bank-${bankId}`
}

export function loadMarkedQuestionIds(bankId) {
  try {
    const ids = JSON.parse(localStorage.getItem(markedQuestionsKey(bankId)) || '[]')
    return new Set(Array.isArray(ids) ? ids : [])
  } catch {
    return new Set()
  }
}

export function setQuestionMarked(bankId, questionId, marked) {
  const ids = loadMarkedQuestionIds(bankId)
  if (marked) {
    ids.add(questionId)
  } else {
    ids.delete(questionId)
  }
  localStorage.setItem(markedQuestionsKey(bankId), JSON.stringify([...ids]))
  return ids
}

export function getStats(records) {
  const values = Object.values(records)
  const total = values.length
  const correct = values.filter(item => item.correct === true).length
  const wrong = values.filter(item => item.correct === false).length
  const graded = correct + wrong
  return {
    total,
    correct,
    wrong,
    errorRate: graded === 0 ? 0 : wrong / graded,
    accuracyRate: graded === 0 ? 0 : correct / graded
  }
}
