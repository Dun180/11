export function getOptionGroup(question, index) {
  return Math.floor(index / (question.options.length / question.optionGroups.length))
}

export function selectGroupedOption(question, selection, index) {
  const group = getOptionGroup(question, index)
  return [...(selection || []).filter(option => getOptionGroup(question, option) !== group), index]
    .sort((a, b) => a - b)
}

export function makeChoiceRecord(question, selection) {
  const answers = question.answers || []
  const selections = Array.isArray(selection) ? selection : selection == null ? [] : [selection]
  if (!selections.length || (question.optionGroups && selections.length !== question.optionGroups.length)) return null
  return {
    selected: question.optionGroups || answers.length > 1 ? selections : selections[0],
    answers,
    correct: answers.length ? selections.length === answers.length && selections.every(index => answers.includes(index)) : null
  }
}
