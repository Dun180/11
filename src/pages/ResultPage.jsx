import { ArrowLeft, BookOpenCheck, ListRestart } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import StatsBox from '../components/StatsBox.jsx'
import { getBank, getQuestionsForBank } from '../data/selectors.js'
import { getStats, loadAnswerRecords } from '../data/storage.js'

export default function ResultPage() {
  const { bankId } = useParams()
  const bank = getBank(bankId)
  const bankQuestions = getQuestionsForBank(bankId)

  if (!bank) return <Navigate to="/" replace />

  const english = Boolean(bank.englishTitle)
  const records = loadAnswerRecords(bankId)
  const stats = getStats(records)
  const wrongQuestions = bankQuestions.filter(question => records[question.id]?.correct === false)

  return (
    <main className="page narrow-page" lang={english ? 'en' : undefined}>
      <Link className="icon-link" to={`/bank/${bankId}`}>
        <ArrowLeft size={18} />
        {english ? 'Back to practice' : '返回练习'}
      </Link>
      <header className="result-header">
        <p className="eyebrow">{bank.englishTitle || bank.title}</p>
        <h1>{english ? 'Practice results' : '练习统计'}</h1>
      </header>
      <StatsBox stats={stats} totalQuestions={bankQuestions.length} english={english} ungraded={bank.ungraded} />
      <section className="result-summary">
        {!bank.ungraded && <p>{english ? 'Incorrect answers: ' : '当前错题数：'}<strong>{wrongQuestions.length}</strong></p>}
        <div className="result-actions">
          {!bank.ungraded && (
            <Link className="primary-button" to={`/review/${bankId}`}>
              <BookOpenCheck size={18} />
              {english ? 'Review incorrect answers' : '复习错题'}
            </Link>
          )}
          <Link className="secondary-button" to={`/bank/${bankId}`}>
            <ListRestart size={18} />
            {english ? 'Continue practice' : '继续答题'}
          </Link>
        </div>
      </section>
    </main>
  )
}
