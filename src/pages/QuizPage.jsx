import { ArrowLeft, ArrowRight, BarChart3, Home } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard.jsx'
import StatsBox from '../components/StatsBox.jsx'
import { getBank, getQuestionsForBank } from '../data/selectors.js'
import { getStats, loadAnswerRecords, saveAnswerRecords } from '../data/storage.js'

function shuffleQuestions(questions) {
  const shuffled = [...questions]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }
  return shuffled
}

function getResumeIndex(questions, records) {
  const firstUnansweredIndex = questions.findIndex(question => !records[question.id])
  if (firstUnansweredIndex >= 0) return firstUnansweredIndex
  return Math.max(questions.length - 1, 0)
}

export default function QuizPage({ randomize = false }) {
  const { bankId } = useParams()
  const navigate = useNavigate()
  const bank = getBank(bankId)
  const orderedQuestions = useMemo(() => getQuestionsForBank(bankId), [bankId])
  const bankQuestions = useMemo(
    () => randomize ? shuffleQuestions(orderedQuestions) : orderedQuestions,
    [orderedQuestions, randomize]
  )
  const [answerRecords, setAnswerRecords] = useState(() => loadAnswerRecords(bankId))
  const [currentIndex, setCurrentIndex] = useState(() => getResumeIndex(bankQuestions, loadAnswerRecords(bankId)))
  const [selectedOption, setSelectedOption] = useState(null)
  const [loadedBankId, setLoadedBankId] = useState(bankId)

  const currentQuestion = bankQuestions[currentIndex]
  const record = currentQuestion ? answerRecords[currentQuestion.id] : null
  const stats = getStats(answerRecords)

  useEffect(() => {
    const savedRecords = loadAnswerRecords(bankId)
    setAnswerRecords(savedRecords)
    setCurrentIndex(getResumeIndex(bankQuestions, savedRecords))
    setLoadedBankId(bankId)
  }, [bankId, bankQuestions])

  useEffect(() => {
    if (loadedBankId !== bankId) return
    saveAnswerRecords(bankId, answerRecords)
  }, [answerRecords, bankId, loadedBankId])

  useEffect(() => {
    if (!currentQuestion) return
    const savedRecord = answerRecords[currentQuestion.id]
    setSelectedOption(savedRecord ? savedRecord.selected : null)
  }, [answerRecords, currentIndex, currentQuestion])

  if (!bank || bankQuestions.length === 0) {
    return <Navigate to="/" replace />
  }

  function handleSelectOption(optionIndex) {
    if (record) return
    const isMultiAnswer = (currentQuestion.answers || [currentQuestion.answer]).length > 1
    if (!isMultiAnswer) {
      setSelectedOption(optionIndex)
      return
    }

    setSelectedOption(prev => {
      const selections = Array.isArray(prev) ? prev : []
      return selections.includes(optionIndex)
        ? selections.filter(item => item !== optionIndex)
        : [...selections, optionIndex].sort((a, b) => a - b)
    })
  }

  function handleSubmitAnswer() {
    const selections = Array.isArray(selectedOption)
      ? selectedOption
      : selectedOption === null ? [] : [selectedOption]
    if (selections.length === 0) {
      alert('请先选择一个答案')
      return
    }
    const correctAnswers = currentQuestion.answers || []
    const isCorrect = correctAnswers.length === 0 ? null : selections.length === correctAnswers.length
      && selections.every(option => correctAnswers.includes(option))

    setAnswerRecords(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selected: correctAnswers.length > 1 ? selections : selections[0],
        answers: correctAnswers,
        correct: isCorrect
      }
    }))
  }

  function goToQuestion(nextIndex) {
    setCurrentIndex(Math.max(0, Math.min(bankQuestions.length - 1, nextIndex)))
  }

  return (
    <main className="page quiz-layout">
      <aside className="quiz-sidebar">
        <Link className="icon-link" to="/">
          <Home size={18} />
          题库
        </Link>
        <div>
          <p className="eyebrow">{randomize ? '随机练习' : '正在练习'}</p>
          <h1>{bank.title}</h1>
        </div>
        <StatsBox stats={stats} totalQuestions={bankQuestions.length} />
        <Link className="secondary-button" to={`/result/${bankId}`}>
          <BarChart3 size={18} />
          查看统计
        </Link>
      </aside>

      <section className="quiz-main">
        <div className="progress-panel">
          <span>{currentIndex + 1} / {bankQuestions.length}</span>
          <div className="progress-track">
            <div style={{ width: `${((currentIndex + 1) / bankQuestions.length) * 100}%` }} />
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          record={record}
          onSelect={handleSelectOption}
          onSubmit={handleSubmitAnswer}
        />

        <nav className="pager">
          <button type="button" className="secondary-button" onClick={() => goToQuestion(currentIndex - 1)} disabled={currentIndex === 0}>
            <ArrowLeft size={18} />
            上一题
          </button>
          {currentIndex === bankQuestions.length - 1 ? (
            <button type="button" className="primary-button" onClick={() => navigate(`/result/${bankId}`)}>
              完成并查看统计
            </button>
          ) : (
            <button type="button" className="secondary-button" onClick={() => goToQuestion(currentIndex + 1)}>
              下一题
              <ArrowRight size={18} />
            </button>
          )}
        </nav>
      </section>
    </main>
  )
}
