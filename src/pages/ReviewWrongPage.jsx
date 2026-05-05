import { ArrowLeft, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AnalysisBox from '../components/AnalysisBox.jsx'
import MarkdownContent from '../components/MarkdownContent.jsx'
import OptionList from '../components/OptionList.jsx'
import { getBank, getQuestionsForBank } from '../data/selectors.js'
import { loadAnswerRecords, saveAnswerRecords } from '../data/storage.js'

export default function ReviewWrongPage() {
  const { bankId } = useParams()
  const bank = getBank(bankId)
  const bankQuestions = getQuestionsForBank(bankId)
  const [records, setRecords] = useState(() => loadAnswerRecords(bankId))
  const [practiceSelections, setPracticeSelections] = useState({})
  const [retryRecords, setRetryRecords] = useState({})

  if (!bank) return <Navigate to="/" replace />

  const wrongQuestions = bankQuestions.filter(question => records[question.id]?.correct === false)

  function retryQuestion(question) {
    const rawSelected = practiceSelections[question.id]
    const selections = Array.isArray(rawSelected)
      ? rawSelected
      : rawSelected === undefined ? [] : [rawSelected]
    if (selections.length === 0) {
      alert('请先选择一个答案')
      return
    }
    const correctAnswers = question.answers || []
    const isCorrect = correctAnswers.length === 0 ? null : selections.length === correctAnswers.length
      && selections.every(option => correctAnswers.includes(option))
    const nextRecords = {
      ...records,
      [question.id]: {
        selected: correctAnswers.length > 1 ? selections : selections[0],
        answers: correctAnswers,
        correct: isCorrect
      }
    }
    setRecords(nextRecords)
    setRetryRecords(prev => ({
      ...prev,
      [question.id]: nextRecords[question.id]
    }))
    saveAnswerRecords(bankId, nextRecords)
  }

  return (
    <main className="page narrow-page">
      <Link className="icon-link" to={`/result/${bankId}`}>
        <ArrowLeft size={18} />
        返回统计
      </Link>
      <header className="result-header">
        <p className="eyebrow">{bank.title}</p>
        <h1>错题复习</h1>
        <p className="muted">共 {wrongQuestions.length} 道错题</p>
      </header>

      {wrongQuestions.length === 0 ? (
        <section className="empty-state">
          <strong>当前没有错题</strong>
          <p>答题记录里没有错误题目，可以继续练习或重置后重新开始。</p>
        </section>
      ) : (
        <div className="review-list">
          {wrongQuestions.map(question => (
            <article className="review-card" key={question.id}>
              <div className="question-heading">
                <span>错题 {question.number}</span>
                <strong>{question.title}</strong>
              </div>
              <MarkdownContent text={question.question} images={question.images} />
              <AnalysisBox question={question} record={retryRecords[question.id]} />
              <OptionList
                options={question.options}
                selectedOption={practiceSelections[question.id] ?? null}
                answer={question.answers || [question.answer]}
                record={null}
                onSelect={optionIndex => setPracticeSelections(prev => {
                  const correctAnswers = question.answers || [question.answer]
                  if (correctAnswers.length <= 1) {
                    return { ...prev, [question.id]: optionIndex }
                  }
                  const current = Array.isArray(prev[question.id]) ? prev[question.id] : []
                  const next = current.includes(optionIndex)
                    ? current.filter(item => item !== optionIndex)
                    : [...current, optionIndex].sort((a, b) => a - b)
                  return { ...prev, [question.id]: next }
                })}
              />
              <button type="button" className="primary-button" onClick={() => retryQuestion(question)}>
                <RotateCcw size={18} />
                重新提交
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
