const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function OptionDiagram({ image }) {
  const [width, height] = image.size
  const [left, top, cropWidth, cropHeight] = image.crop
  return (
    <span className="option-diagram" style={{ aspectRatio: `${cropWidth} / ${cropHeight}` }}>
      <img
        src={image.src}
        alt=""
        style={{
          width: `${100 * width / cropWidth}%`,
          height: `${100 * height / cropHeight}%`,
          left: `${-100 * left / cropWidth}%`,
          top: `${-100 * top / cropHeight}%`
        }}
      />
    </span>
  )
}

export default function OptionList({ options, optionGroups, optionImages, selectedOption, answer, record, onSelect }) {
  const correctAnswers = record?.answers || (Array.isArray(answer) ? answer : Number.isInteger(answer) ? [answer] : [])
  const selectedAnswers = Array.isArray(selectedOption) ? selectedOption : selectedOption === null ? [] : [selectedOption]
  const recordSelections = Array.isArray(record?.selected) ? record.selected : record ? [record.selected] : []

  function renderOption(option, index) {
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
        key={index}
        onClick={() => onSelect(index)}
        disabled={Boolean(record)}
        aria-pressed={isSelected}
      >
        {!optionGroups && <span className="option-label">{labels[index]}</span>}
        <span>
          {option}
          {optionImages?.[index] && <OptionDiagram image={optionImages[index]} />}
        </span>
      </button>
    )
  }

  if (optionGroups) {
    const groupSize = options.length / optionGroups.length
    return (
      <div className="grouped-options">
        {optionGroups.map((label, group) => {
          const start = group * groupSize
          return (
            <fieldset key={label}>
              <legend>{label}</legend>
              <div className="group-options">
                {options.slice(start, start + groupSize).map((option, index) => renderOption(option, start + index))}
              </div>
            </fieldset>
          )
        })}
      </div>
    )
  }

  return (
    <div className={optionImages ? 'option-list has-diagrams' : 'option-list'}>
      {options.map(renderOption)}
    </div>
  )
}
