import { Bookmark } from 'lucide-react'
import AnalysisBox from './AnalysisBox.jsx'
import MarkdownContent from './MarkdownContent.jsx'
import OptionList from './OptionList.jsx'

export default function QuestionCard({
  question,
  selectedOption,
  record,
  english = false,
  ungraded = false,
  marked = false,
  onToggleMark,
  onSelect,
  onSubmit
}) {
  const isReferenceOnly = Boolean(question.referenceAnswer)
  const isMultipleChoice = (question.answers || [question.answer]).length > 1
  const submitLabel = isReferenceOnly
    ? (english ? 'Show reference answer' : '查看参考答案')
    : (english ? 'Submit answer' : '提交答案')

  return (
    <article className="question-card">
      <div className="question-heading">
        {!ungraded && (
          <div className="question-meta-row">
            <span>Question {question.number}</span>
            {isMultipleChoice && <span className="question-type-badge">{english ? 'Multiple answers' : '多选题'}</span>}
            {isReferenceOnly && <span className="question-type-badge">{english ? 'Self-check' : '自查题'}</span>}
          </div>
        )}
        <div className="question-title-row">
          <strong>{question.title}</strong>
          {onToggleMark && (
            <button type="button" className="secondary-button mark-question-toggle" aria-pressed={marked} onClick={onToggleMark}>
              <Bookmark size={18} fill={marked ? 'currentColor' : 'none'} />
              {marked ? 'Unmark question' : 'Mark question'}
            </button>
          )}
        </div>
      </div>
      <MarkdownContent text={question.question} images={question.images} />
      {question.transcript && (
        <section className="question-transcript" lang="en">
          <h2>Original English text</h2>
          <p>{question.transcript}</p>
          {question.transcriptNote && <small className="transcript-note">{question.transcriptNote}</small>}
        </section>
      )}
      {question.imageNotes && (
        <div lang="zh-CN">
          <MarkdownContent text={question.imageNotes} />
        </div>
      )}
      {isMultipleChoice && (
        <p className="multi-choice-note">
          {english ? 'Select all correct answers.' : '本题有多个正确答案，请选择所有符合的选项。'}
        </p>
      )}
      {question.options.length > 0 && (
        <OptionList
          options={question.options}
          selectedOption={selectedOption}
          answer={question.answers || [question.answer]}
          record={record}
          onSelect={onSelect}
        />
      )}
      <div className="question-actions">
        <button type="button" className="primary-button" onClick={onSubmit} disabled={Boolean(record)}>
          {submitLabel}
        </button>
        {record && !isReferenceOnly && <span className="submitted-note">{english ? 'Answer submitted' : '已提交，答案已锁定'}</span>}
      </div>
      <AnalysisBox question={question} record={record} english={english} />
    </article>
  )
}
