import MarkdownContent from './MarkdownContent.jsx'
import { getOptionGroup } from '../data/choiceAnswers.js'

const labels = ['A', 'B', 'C', 'D']

export default function AnalysisBox({ question, record, english = false }) {
  if (!record) return null
  const isReferenceOnly = Boolean(question.referenceAnswer)
  const correctAnswers = record.answers || question.answers || [question.answer]
  const selectedAnswers = Array.isArray(record.selected) ? record.selected : [record.selected]
  const formatAnswers = indexes => indexes
    .map(index => question.optionGroups
      ? `${question.optionGroups[getOptionGroup(question, index)]} = ${question.options[index]}`
      : `${labels[index]}. ${question.options[index]}`)
    .join(english ? '; ' : '；')
  const hasAnswerKey = correctAnswers.length > 0
  const statusLabels = english ? ['Viewed', 'Correct', 'Incorrect', 'Submitted'] : ['已查看', '回答正确', '回答错误', '已提交']
  const [viewed, correct, incorrect, submitted] = statusLabels
  const status = isReferenceOnly ? viewed : record.correct === true ? correct : record.correct === false ? incorrect : submitted
  const missingAnswer = english ? 'No answer key provided' : '该题库未提供标准答案'
  const answerText = question.referenceAnswer || (hasAnswerKey ? formatAnswers(correctAnswers) : missingAnswer)
  const answerLabel = isReferenceOnly
    ? question.referenceLabel || (english ? 'Reference answer' : '参考答案')
    : (english ? 'Correct answer' : '正确答案')

  return (
    <section className={`analysis-box ${record.correct === true ? 'is-correct' : record.correct === false ? 'is-wrong' : ''}`}>
      <strong>{status}</strong>
      <dl>
        {!isReferenceOnly && (
          <div>
            <dt>{english ? 'Your answer' : '你的答案'}</dt>
            <dd>{formatAnswers(selectedAnswers)}</dd>
          </div>
        )}
        <div>
          <dt>{answerLabel}</dt>
          <dd>{answerText}</dd>
        </div>
      </dl>
      {question.explanation && <p>{question.explanation}</p>}
      {question.answerImages?.length > 0 && <MarkdownContent images={question.answerImages} />}
    </section>
  )
}
