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

  const records = loadAnswerRecords(bankId)
  const stats = getStats(records)
  const wrongQuestions = bankQuestions.filter(question => records[question.id]?.correct === false)

  return (
    <main className="page narrow-page">
      <Link className="icon-link" to={`/bank/${bankId}`}>
        <ArrowLeft size={18} />
        返回练习
      </Link>
      <header className="result-header">
        <p className="eyebrow">{bank.title}</p>
        <h1>练习统计</h1>
      </header>
      <StatsBox stats={stats} totalQuestions={bankQuestions.length} />
      <section className="result-summary">
        <p>当前错题数：<strong>{wrongQuestions.length}</strong></p>
        <div className="result-actions">
          <Link className="primary-button" to={`/review/${bankId}`}>
            <BookOpenCheck size={18} />
            复习错题
          </Link>
          <Link className="secondary-button" to={`/bank/${bankId}`}>
            <ListRestart size={18} />
            继续答题
          </Link>
        </div>
      </section>
    </main>
  )
}
