export default function StatsBox({ stats, totalQuestions, english = false, ungraded = false }) {
  const items = [
    [english ? 'Questions' : '题目总数', totalQuestions],
    [english ? 'Completed' : '已答题', stats.total]
  ]
  if (!ungraded) {
    items.push(
      [english ? 'Correct' : '答对', stats.correct],
      [english ? 'Incorrect' : '答错', stats.wrong],
      [english ? 'Accuracy' : '正确率', `${(stats.accuracyRate * 100).toFixed(1)}%`],
      [english ? 'Error rate' : '错误率', `${(stats.errorRate * 100).toFixed(1)}%`]
    )
  }

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
