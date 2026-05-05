const labels = ['A', 'B', 'C', 'D']

export default function OptionList({ options, selectedOption, answer, record, onSelect }) {
  const correctAnswers = record?.answers || (Array.isArray(answer) ? answer : Number.isInteger(answer) ? [answer] : [])
  const selectedAnswers = Array.isArray(selectedOption) ? selectedOption : selectedOption === null ? [] : [selectedOption]
  const recordSelections = Array.isArray(record?.selected) ? record.selected : record ? [record.selected] : []

  return (
    <div className="option-list">
      {options.map((option, index) => {
        const isSelected = selectedAnswers.includes(index)
        const isCorrect = record && correctAnswers.includes(index)
        const isWrongSelection = record && correctAnswers.length > 0 && recordSelections.includes(index) && !correctAnswers.includes(index)
        const className = [
          'option-button',
          isSelected ? 'is-selected' : '',
          isCorrect ? 'is-correct' : '',
          isWrongSelection ? 'is-wrong' : ''
        ].filter(Boolean).join(' ')

        return (
          <button
            className={className}
            type="button"
            key={`${labels[index]}-${option}`}
            onClick={() => onSelect(index)}
            disabled={Boolean(record)}
          >
            <span className="option-label">{labels[index]}</span>
            <span>{option}</span>
          </button>
        )
      })}
    </div>
  )
}
