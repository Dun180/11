const labels = ['A', 'B', 'C', 'D']

export default function AnalysisBox({ question, record }) {
  if (!record) return null
  const correctAnswers = record.answers || question.answers || [question.answer]
  const selectedAnswers = Array.isArray(record.selected) ? record.selected : [record.selected]
  const formatAnswers = indexes => indexes
    .map(index => `${labels[index]}. ${question.options[index]}`)
    .join('；')
  const hasAnswerKey = correctAnswers.length > 0

  return (
    <section className={`analysis-box ${record.correct === true ? 'is-correct' : record.correct === false ? 'is-wrong' : ''}`}>
      <strong>{record.correct === true ? '回答正确' : record.correct === false ? '回答错误' : '已提交'}</strong>
      <dl>
        <div>
          <dt>你的答案</dt>
          <dd>{formatAnswers(selectedAnswers)}</dd>
        </div>
        <div>
          <dt>正确答案</dt>
          <dd>{hasAnswerKey ? formatAnswers(correctAnswers) : '该题库未提供标准答案'}</dd>
        </div>
      </dl>
      <p>{question.explanation}</p>
    </section>
  )
}
