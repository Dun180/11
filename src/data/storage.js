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
