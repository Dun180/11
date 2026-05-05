import { questionBanks, questions } from './questions.js'

export function getBank(bankId) {
  return questionBanks.find(bank => bank.id === bankId)
}

export function getQuestionsForBank(bankId) {
  return questions.filter(question => question.bankId === bankId)
}
