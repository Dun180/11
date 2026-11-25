import { questionBanks, questions } from './questions.js'

export function getBank(bankId) {
  return questionBanks.find(bank => bank.id === bankId)
}

export function getQuestionsForBank(bankId) {
  return questions.filter(question => question.bankId === bankId)
}

export function getQuestionForDisplay(question, showChinese) {
  if (!showChinese || !question.translation) return question

  const { translation } = question
  return {
    ...question,
    question: [question.question, translation.question].filter(Boolean).join('\n\n'),
    options: question.options.map((option, index) => [option, translation.options?.[index]].filter(Boolean).join('\n')),
    explanation: [question.explanation, translation.explanation].filter(Boolean).join('\n\n'),
    referenceAnswer: [question.referenceAnswer, translation.referenceAnswer].filter(Boolean).join('\n'),
    imageNotes: translation.imageNotes
  }
}
