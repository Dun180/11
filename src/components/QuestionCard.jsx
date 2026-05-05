import AnalysisBox from './AnalysisBox.jsx'
import MarkdownContent from './MarkdownContent.jsx'
import OptionList from './OptionList.jsx'

export default function QuestionCard({
  question,
  selectedOption,
  record,
  onSelect,
  onSubmit
}) {
  const isMultipleChoice = (question.answers || [question.answer]).length > 1

  return (
    <article className="question-card">
      <div className="question-heading">
        <div className="question-meta-row">
          <span>Question {question.number}</span>
          {isMultipleChoice && <span className="question-type-badge">多选题</span>}
        </div>
        <strong>{question.title}</strong>
      </div>
      <MarkdownContent text={question.question} images={question.images} />
      {isMultipleChoice && <p className="multi-choice-note">本题有多个正确答案，请选择所有符合的选项。</p>}
      <OptionList
        options={question.options}
        selectedOption={selectedOption}
        answer={question.answers || [question.answer]}
        record={record}
        onSelect={onSelect}
      />
      <div className="question-actions">
        <button type="button" className="primary-button" onClick={onSubmit} disabled={Boolean(record)}>
          提交答案
        </button>
        {record && <span className="submitted-note">已提交，答案已锁定</span>}
      </div>
      <AnalysisBox question={question} record={record} />
    </article>
  )
}
