export default function QuestionLanguageToggle({ showChinese, onToggle }) {
  return (
    <button
      type="button"
      className="secondary-button language-toggle"
      aria-pressed={showChinese}
      onClick={onToggle}
    >
      Show Chinese
    </button>
  )
}
