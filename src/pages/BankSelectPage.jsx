import { Bookmark, BookOpen, Play, RotateCcw, Shuffle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { questionBanks } from '../data/questions.js'
import { getQuestionsForBank } from '../data/selectors.js'
import { clearAnswerRecords, getStats, loadAnswerRecords, loadMarkedQuestionIds } from '../data/storage.js'

export default function BankSelectPage() {
  return (
    <main className="page">
      <header className="app-header">
        <div>
          <h1>题库练习系统</h1>
        </div>
      </header>

      <section className="bank-grid" aria-label="题库列表">
        {questionBanks.map(bank => {
          const stats = getStats(loadAnswerRecords(bank.id))
          const markedIds = bank.supportsMarks ? loadMarkedQuestionIds(bank.parentBankId || bank.id) : new Set()
          const markedCount = bank.supportsMarks
            ? getQuestionsForBank(bank.id).filter(question => markedIds.has(question.id)).length
            : 0
          return (
            <article className="bank-card" key={bank.id}>
              <div className="bank-icon">
                <BookOpen size={22} />
              </div>
              <div className="bank-card-body">
                <h2>{bank.title}</h2>
                <p>{bank.description}</p>
                <div className="bank-meta">
                  <span>{bank.total} 题</span>
                  <span>{bank.ungraded ? '已练习' : '已答'} {stats.total}</span>
                  {!bank.ungraded && <span>正确率 {(stats.accuracyRate * 100).toFixed(1)}%</span>}
                </div>
              </div>
              <div className="bank-card-actions">
                <Link className="primary-button" to={`/bank/${bank.id}`}>
                  <Play size={18} />
                  开始练习
                </Link>
                <Link className="secondary-button" to={`/bank/${bank.id}/random`}>
                  <Shuffle size={18} />
                  随机练习
                </Link>
                {bank.supportsMarks && (
                  <Link className="secondary-button" to={`/bank/${bank.id}/marked`}>
                    <Bookmark size={18} />
                    练习标记题（{markedCount}）
                  </Link>
                )}
                <button type="button" className="ghost-button" onClick={() => {
                  clearAnswerRecords(bank.id)
                  window.location.reload()
                }}>
                  <RotateCcw size={17} />
                  重置记录
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
