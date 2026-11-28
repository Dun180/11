import { ArrowLeft, ArrowRight, BarChart3, Home } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard.jsx'
import QuestionLanguageToggle from '../components/QuestionLanguageToggle.jsx'
import StatsBox from '../components/StatsBox.jsx'
import { makeChoiceRecord, selectGroupedOption } from '../data/choiceAnswers.js'
import { getBank, getQuestionForDisplay, getQuestionsForBank } from '../data/selectors.js'
import { getStats, loadAnswerRecords, loadMarkedQuestionIds, saveAnswerRecords, setQuestionMarked } from '../data/storage.js'

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

export default function QuizPage({ randomize = false, markedOnly = false }) {
  const { bankId } = useParams()
  const mode = markedOnly ? 'marked' : randomize ? 'random' : 'ordered'
  return <QuizSession key={`${bankId}:${mode}`} bankId={bankId} randomize={randomize} markedOnly={markedOnly} />
}

function QuizSession({ bankId, randomize, markedOnly }) {
  const bank = getBank(bankId)
  const markBankId = bank?.parentBankId || bankId
  const english = Boolean(bank?.englishTitle)
  const orderedQuestions = useMemo(() => getQuestionsForBank(bankId), [bankId])
  const hasTranslation = orderedQuestions.some(question => question.translation)
  const [markedIds, setMarkedIds] = useState(() => loadMarkedQuestionIds(markBankId))
  const markFilter = markedOnly ? markedIds : null
  const bankQuestions = useMemo(() => {
    if (markFilter) return orderedQuestions.filter(question => markFilter.has(question.id))
    return randomize ? shuffleQuestions(orderedQuestions) : orderedQuestions
  }, [orderedQuestions, randomize, markFilter])
  const [answerRecords, setAnswerRecords] = useState(() => markedOnly ? {} : loadAnswerRecords(bankId))
  const [currentIndex, setCurrentIndex] = useState(() => getResumeIndex(bankQuestions, answerRecords))
  const [selectedOption, setSelectedOption] = useState(null)
  const [showChinese, setShowChinese] = useState(false)

  const position = Math.min(currentIndex, bankQuestions.length - 1)
  const currentQuestion = bankQuestions[position]
  const record = currentQuestion ? answerRecords[currentQuestion.id] : null
  const displayedRecord = bank?.ungraded && !record?.referenceViewed ? null : record
  const stats = getStats(answerRecords)

  useEffect(() => {
    if (!markedOnly) saveAnswerRecords(bankId, answerRecords)
  }, [answerRecords, bankId, markedOnly])

  useEffect(() => {
    if (!currentQuestion) return
    const savedRecord = answerRecords[currentQuestion.id]
    setSelectedOption(savedRecord ? savedRecord.selected : null)
  }, [answerRecords, currentQuestion])

  if (!bank || orderedQuestions.length === 0) {
    return <Navigate to="/" replace />
  }
  if (markedOnly && !bank.supportsMarks) {
    return <Navigate to={`/bank/${bankId}`} replace />
  }
  if (!currentQuestion) {
    return (
      <main className="page narrow-page" lang="en">
        <section className="empty-state">
          <h1>No marked questions</h1>
          <p>Mark questions during practice to add them here.</p>
          <div className="result-actions">
            <Link className="primary-button" to={`/bank/${bankId}`}>Practice all questions</Link>
            <Link className="icon-link" to="/">Question banks</Link>
          </div>
        </section>
      </main>
    )
  }

  const isMarked = markedIds.has(currentQuestion.id)

  function handleToggleMark() {
    setMarkedIds(setQuestionMarked(markBankId, currentQuestion.id, !isMarked))
    if (markedOnly && record) {
      setAnswerRecords(prev => {
        const next = { ...prev }
        delete next[currentQuestion.id]
        return next
      })
    }
  }

  function handleSelectOption(optionIndex) {
    if (record) return
    if (currentQuestion.optionGroups) {
      setSelectedOption(previous => selectGroupedOption(currentQuestion, previous, optionIndex))
      return
    }
    if (bank.interactiveChoices) {
      saveChoice(optionIndex)
      return
    }
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

  function saveChoice(selection) {
    const choice = makeChoiceRecord(currentQuestion, selection)
    if (!choice) {
      alert(currentQuestion.optionGroups ? 'Choose one value for every bias.' : english ? 'Select an answer first.' : '请先选择一个答案')
      return
    }
    setAnswerRecords(prev => prev[currentQuestion.id] ? prev : { ...prev, [currentQuestion.id]: choice })
  }

  function handleSubmitAnswer() {
    if (currentQuestion.referenceAnswer) {
      setAnswerRecords(prev => ({
        ...prev,
        [currentQuestion.id]: {
          selected: null,
          answers: [],
          correct: null,
          ...(bank.ungraded && { referenceViewed: true })
        }
      }))
      return
    }

    saveChoice(selectedOption)
  }

  function goToQuestion(nextIndex) {
    setCurrentIndex(Math.max(0, Math.min(bankQuestions.length - 1, nextIndex)))
  }

  return (
    <main className="page quiz-layout" lang={english && !showChinese ? 'en' : undefined}>
      <aside className="quiz-sidebar">
        <Link className="icon-link" to="/">
          <Home size={18} />
          {english ? 'Question banks' : '题库'}
        </Link>
        <div>
          <p className="eyebrow">
            {markedOnly ? 'Marked questions' : english ? (randomize ? 'Random practice' : 'Practice') : (randomize ? '随机练习' : '正在练习')}
          </p>
          <h1>{bank.englishTitle || bank.title}</h1>
        </div>
        <StatsBox stats={stats} totalQuestions={bankQuestions.length} english={english} ungraded={bank.ungraded} />
        {!markedOnly && (
          <Link className="secondary-button" to={`/result/${bankId}`}>
            <BarChart3 size={18} />
            {english ? 'View results' : '查看统计'}
          </Link>
        )}
      </aside>

      <section className="quiz-main">
        <div className="progress-panel">
          <span>{position + 1} / {bankQuestions.length}</span>
          <div className="progress-track">
            <div style={{ width: `${((position + 1) / bankQuestions.length) * 100}%` }} />
          </div>
          {hasTranslation && <QuestionLanguageToggle showChinese={showChinese} onToggle={() => setShowChinese(value => !value)} />}
        </div>

        <QuestionCard
          question={getQuestionForDisplay(currentQuestion, hasTranslation && showChinese)}
          english={english}
          ungraded={bank.ungraded}
          marked={isMarked}
          instantChoice={bank.interactiveChoices}
          onToggleMark={bank.supportsMarks ? handleToggleMark : undefined}
          selectedOption={selectedOption}
          record={displayedRecord}
          onSelect={handleSelectOption}
          onSubmit={handleSubmitAnswer}
        />

        <nav className="pager">
          <button type="button" className="secondary-button" onClick={() => goToQuestion(position - 1)} disabled={position === 0}>
            <ArrowLeft size={18} />
            {english ? 'Previous question' : '上一题'}
          </button>
          {position === bankQuestions.length - 1 ? (
            <Link className="primary-button" to={markedOnly ? '/' : `/result/${bankId}`}>
              {markedOnly ? 'Finish marked practice' : english ? 'Finish and view results' : '完成并查看统计'}
            </Link>
          ) : (
            <button type="button" className="secondary-button" onClick={() => goToQuestion(position + 1)}>
              {english ? 'Next question' : '下一题'}
              <ArrowRight size={18} />
            </button>
          )}
        </nav>
      </section>
    </main>
  )
}
