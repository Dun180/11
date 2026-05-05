function renderInline(value) {
  return value
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
}

export default function MarkdownContent({ text = '', images = [] }) {
  const blocks = text.split(/```/g)

  return (
    <div className="markdown-content">
      {blocks.map((block, index) => {
        if (index % 2 === 1) {
          return <pre key={index}>{block.replace(/^text\n/, '').trim()}</pre>
        }

        return block
          .split(/\n{2,}/)
          .filter(Boolean)
          .map((paragraph, paragraphIndex) => (
            <p key={`${index}-${paragraphIndex}`}>
              {renderInline(paragraph).split('\n').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < paragraph.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))
      })}
      {images.map(image => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt || 'question visual'} />
          {image.alt && <figcaption>{image.alt}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
