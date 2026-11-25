import { ArrowLeft, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AnalysisBox from '../components/AnalysisBox.jsx'
import MarkdownContent from '../components/MarkdownContent.jsx'
import OptionList from '../components/OptionList.jsx'
import QuestionLanguageToggle from '../components/QuestionLanguageToggle.jsx'
import { getBank, getQuestionForDisplay, getQuestionsForBank } from '../data/selectors.js'
import { loadAnswerRecords, saveAnswerRecords } from '../data/storage.js'

export default function ReviewWrongPage() {
  const { bankId } = useParams()
  const bank = getBank(bankId)
  const english = Boolean(bank?.englishTitle)
  const bankQuestions = getQuestionsForBank(bankId)
  const [records, setRecords] = useState(() => loadAnswerRecords(bankId))
  const [practiceSelections, setPracticeSelections] = useState({})
  const [retryRecords, setRetryRecords] = useState({})
  const [showChinese, setShowChinese] = useState(false)

  if (!bank) return <Navigate to="/" replace />

  const wrongQuestions = bankQuestions
    .filter(question => records[question.id]?.correct === false)
    .map(question => getQuestionForDisplay(question, showChinese))

  function retryQuestion(question) {
    const rawSelected = practiceSelections[question.id]
    const selections = Array.isArray(rawSelected)
      ? rawSelected
      : rawSelected === undefined ? [] : [rawSelected]
    if (selections.length === 0) {
      alert(english ? 'Select an answer first.' : '请先选择一个答案')
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
    <main className="page narrow-page" lang={english && !showChinese ? 'en' : undefined}>
      <Link className="icon-link" to={`/result/${bankId}`}>
        <ArrowLeft size={18} />
        {english ? 'Back to results' : '返回统计'}
      </Link>
      <header className="result-header">
        <p className="eyebrow">{bank.englishTitle || bank.title}</p>
        <h1>{english ? 'Review incorrect answers' : '错题复习'}</h1>
        <p className="muted">{english ? `Incorrect answers: ${wrongQuestions.length}` : `共 ${wrongQuestions.length} 道错题`}</p>
        {english && wrongQuestions.length > 0 && (
          <QuestionLanguageToggle showChinese={showChinese} onToggle={() => setShowChinese(value => !value)} />
        )}
      </header>

      {wrongQuestions.length === 0 ? (
        <section className="empty-state">
          <strong>{english ? 'No incorrect answers yet' : '当前没有错题'}</strong>
          <p>{english ? 'Continue practicing or reset your progress to start over.' : '答题记录里没有错误题目，可以继续练习或重置后重新开始。'}</p>
        </section>
      ) : (
        <div className="review-list">
          {wrongQuestions.map(question => (
            <article className="review-card" key={question.id}>
              <div className="question-heading">
                <span>{english ? 'Question' : '错题'} {question.number}</span>
                <strong>{question.title}</strong>
              </div>
              <MarkdownContent text={question.question} images={question.images} />
              <AnalysisBox question={question} record={retryRecords[question.id]} english={english} />
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
                {english ? 'Submit again' : '重新提交'}
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
