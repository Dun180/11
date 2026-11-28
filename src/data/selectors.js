import { questionBanks, questions } from './questions.js'

export function getBank(bankId) {
  return questionBanks.find(bank => bank.id === bankId)
}

export function getQuestionsForBank(bankId) {
  const bank = getBank(bankId)
  if (bank?.parentBankId) {
    const section = questions.filter(question => question.bankId === bank.parentBankId && question.category === bank.category)
    return bank.interactiveChoices ? section.map(toChoiceQuestion) : section
  }
  return questions.filter(question => question.bankId === bankId)
}

function toChoiceQuestion(question) {
  const { includeStemImage, chineseOptions, chineseExplanation, ...choice } = question.choicePractice
  return {
    ...question,
    ...choice,
    images: includeStemImage ? question.images.slice(0, 1) : [],
    sourceImages: question.images,
    referenceAnswer: undefined,
    explanation: choice.explanation || question.referenceAnswer,
    translation: {
      options: chineseOptions,
      explanation: chineseExplanation || [
        question.translation.referenceAnswer,
        question.translation.explanation
      ].filter(Boolean).join('\n\n'),
      imageNotes: question.translation.imageNotes
    }
  }
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
