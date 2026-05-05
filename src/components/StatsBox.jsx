export default function StatsBox({ stats, totalQuestions }) {
  const items = [
    ['题目总数', totalQuestions],
    ['已答题', stats.total],
    ['答对', stats.correct],
    ['答错', stats.wrong],
    ['正确率', `${(stats.accuracyRate * 100).toFixed(1)}%`],
    ['错误率', `${(stats.errorRate * 100).toFixed(1)}%`]
  ]

  return (
    <section className="stats-box">
      {items.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  )
}
