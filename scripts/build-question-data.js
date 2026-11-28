import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const outputPath = path.join(root, 'src', 'data', 'questions.js')

const sources = [
  {
    id: 'high-quality',
    title: 'COMP9517 高质量双语题库',
    description: '覆盖图像形成、颜色空间、滤波、边缘、分割、特征、深度学习等主题，题目含中英文解析。',
    path: path.join(root, 'COMP9517_question_bank_editable_with_images'),
    fileMatcher: file => file.endsWith('.md'),
    parser: parseHeadingQuestions
  },
  {
    id: 'simple-concept',
    title: 'COMP9517 简单概念题库',
    description: '按课程概念整理的中英双语基础题，适合快速查漏补缺。',
    path: path.join(root, 'COMP9517_simple_concept', 'COMP9517_simple_concept_question_bank_editable'),
    fileMatcher: file => file.endsWith('.md'),
    parser: parseSimpleConceptQuestions
  },
  {
    id: 'final-ocr',
    title: 'COMP9517 Final Clean 题库',
    description: '由 final 扫描版试题人工清理后的可编辑题库，保留页面图片和手写笔记用于核对。',
    path: path.join(root, 'COMP9517_final_question_bank_editable_with_images'),
    fileMatcher: file => file === 'COMP9517_final_question_bank_clean_editable.md',
    parser: parseFinalCleanQuestions
  },
  {
    id: 'cpu-question-bank',
    title: 'COMP9517 CPU 题库',
    description: '按 CPU PDF 页面顺序整理的可编辑题库，包含标准答案和简要解析。',
    path: path.join(root, 'cpu_answers_with_images'),
    fileMatcher: file => file.endsWith('.md'),
    parser: parseCpuQuestions
  },
  {
    id: 'example-exam',
    title: 'COMP9517 示例考试题',
    description: '50 道选择题示例卷，贴近考试题型，部分题目包含视觉材料。',
    path: path.join(root, 'COMP9517_example_exam_questions'),
    fileMatcher: file => file.endsWith('.md'),
    parser: parseExampleExamQuestions
  },
  {
    id: 'comp9444',
    title: 'COMP9444 神经网络与深度学习双语题库',
    englishTitle: 'COMP9444 Neural Networks and Deep Learning',
    description: '历年试题与复习题，英文在前，附中文翻译、原题图片及参考解析。',
    path: path.join(root, 'COMP9444_question_bank'),
    fileMatcher: file => file === 'questions.json',
    parser: JSON.parse
  },
  {
    id: 'comp9444-new',
    title: 'COMP9444 原题题库 (new)',
    englishTitle: 'COMP9444 Original Exam Questions (new)',
    description: '附英文原题截图、可复制的题干、参考答案和可切换的中文翻译。',
    ungraded: true,
    supportsMarks: true,
    sections: [
      {
        category: 'multiple-choice',
        title: 'COMP9444 选择题',
        englishTitle: 'COMP9444 Multiple-Choice Questions',
        description: '直接选择文字或图形选项，作答后查看答案和解析。',
        ungraded: false,
        interactiveChoices: true
      },
      {
        category: 'calculation',
        title: 'COMP9444 计算题',
        englishTitle: 'COMP9444 Calculation Questions',
        description: '练习数值计算、公式推导和逐步求解。'
      },
      {
        category: 'short-answer',
        title: 'COMP9444 简答题',
        englishTitle: 'COMP9444 Short-Answer Questions',
        description: '练习概念解释、方法比较和图示题。'
      }
    ],
    path: path.join(root, 'COMP9444_original_question_bank'),
    fileMatcher: file => file === 'questions.json',
    parser: JSON.parse
  }
]

function readSource(source) {
  const file = fs.readdirSync(source.path).find(source.fileMatcher)
  if (!file) {
    throw new Error(`No source file found for ${source.id}`)
  }
  const filePath = path.join(source.path, file)
  return { filePath, content: fs.readFileSync(filePath, 'utf8') }
}

function normalizeText(value = '') {
  return value
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function cleanInline(value = '') {
  return normalizeText(value)
    .replace(/^\s*[-*]\s*/, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function answerIndex(answer) {
  const letter = String(answer || '').trim().toUpperCase()[0]
  return Math.max(0, 'ABCD'.indexOf(letter))
}

function answerIndexes(answer) {
  const letters = String(answer || '').toUpperCase().match(/[A-D]/g) || ['A']
  return [...new Set(letters.map(letter => 'ABCD'.indexOf(letter)).filter(index => index >= 0))]
}

function rewriteImagePaths(text, sourceDir) {
  return text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, imagePath) => {
    const normalized = imagePath.replace(/\\/g, '/')
    const sourceRoot = path.basename(sourceDir)
    return `![${alt}](/${sourceRoot}/${normalized})`
  })
}

function extractImages(text) {
  const images = []
  text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    images.push({ alt, src })
    return ''
  })
  return images
}

function stripImages(text) {
  return text.replace(/!\[[^\]]*\]\([^)]+\)/g, '').trim()
}

function preferEnglishText(text = '') {
  return normalizeText(text)
    .split('\n')
    .map(line => {
      if (line.includes('/')) {
        return line.split('/').at(-1).trim()
      }
      return line.replace(/[\u3400-\u9fff\uff00-\uffef]+/g, '').trim()
    })
    .filter(Boolean)
    .join('\n')
}

function parseOptionRuns(text) {
  const matches = [...text.matchAll(/(?:^|\n|\s)([A-D])\.\s*/g)]
  const options = []
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i].index + matches[i][0].length
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length
    options.push({
      letter: matches[i][1],
      text: cleanInline(text.slice(start, end))
    })
  }
  const groups = []
  for (let i = 0; i <= options.length - 4; i += 1) {
    if (options.slice(i, i + 4).map(item => item.letter).join('') === 'ABCD') {
      groups.push(options.slice(i, i + 4).map(item => item.text))
    }
  }
  return groups.at(-1) || []
}

function promptBeforeOptions(text) {
  const firstOption = text.search(/(?:^|\n|\s)A\.\s/)
  return normalizeText(firstOption >= 0 ? text.slice(0, firstOption) : text)
}

function parseHeadingQuestions(markdown, sourceDir) {
  const rewritten = rewriteImagePaths(markdown, sourceDir)
  const chunks = rewritten.split(/\n(?=### Question\s+)/g).filter(chunk => /^### Question\s+/m.test(chunk))
  return chunks.map((chunk, index) => {
    const title = chunk.match(/^###\s+(.+)$/m)?.[1]?.trim() || `Question ${index + 1}`
    const answer = chunk.match(/\*\*Answer\s*\/?\s*答案:\*\*\s*([A-D])/i)?.[1]
      || chunk.match(/\*\*Answer:\*\*\s*([A-D])/i)?.[1]
      || 'A'
    const explanationMatch = chunk.match(/\*\*Explanation\s*\/?\s*解析:\*\*\s*([\s\S]*)/i)
    const answerStart = chunk.search(/\*\*Answer/)
    const body = answerStart >= 0 ? chunk.slice(0, answerStart) : chunk
    const bodyWithoutHeading = body.replace(/^###\s+.+$/m, '').trim()
    const englishSection = bodyWithoutHeading.match(/\*\*English:\*\*([\s\S]*?)(?=\*\*中文：\*\*|\*\*中文:\*\*|$)/)?.[1]
    const optionSource = englishSection || bodyWithoutHeading
    const images = extractImages(bodyWithoutHeading)
    const options = parseOptionRuns(stripImages(optionSource))
    const questionSource = promptBeforeOptions(optionSource)
    const question = stripImages(questionSource)
      .replace(/\*\*(English|中文):\*\*/g, '$1:')
      .replace(/\*\*Figure label:\*\*/g, 'Figure:')
    return {
      id: '',
      title,
      question,
      images,
      options,
      answer: answerIndex(answer),
      answers: answerIndexes(answer),
      explanation: normalizeText(explanationMatch?.[1] || `Correct answer: ${answer}`)
    }
  }).filter(question => question.options.length >= 2)
}

function parseExampleExamQuestions(markdown, sourceDir) {
  const rewritten = rewriteImagePaths(markdown, sourceDir)
  const chunks = rewritten.split(/\n(?=### Question\s+\d+)/g).filter(chunk => /^### Question\s+\d+/m.test(chunk))
  return chunks.map((chunk, index) => {
    const title = chunk.match(/^###\s+(.+)$/m)?.[1]?.trim() || `Question ${index + 1}`
    const questionMatch = chunk.match(/\*\*Question:\*\*\s*([\s\S]*?)(?=\n[A-D]\.\s)/i)
    const answer = chunk.match(/\*\*Answer:\*\*\s*([A-D])/i)?.[1] || 'A'
    const beforeAnswer = chunk.split(/\*\*Answer:\*\*/i)[0]
    const images = extractImages(beforeAnswer)
    const options = parseOptionRuns(stripImages(beforeAnswer))
    return {
      id: '',
      title,
      question: stripImages(questionMatch?.[1] || promptBeforeOptions(beforeAnswer.replace(/^###\s+.+$/m, ''))),
      images,
      options,
      answer: answerIndex(answer),
      answers: answerIndexes(answer),
      explanation: `Correct answer: ${answer}`
    }
  }).filter(question => question.options.length >= 2)
}

function parseSimpleConceptQuestions(markdown, sourceDir) {
  const rewritten = rewriteImagePaths(markdown, sourceDir)
  const questions = []
  const optionStarts = [...rewritten.matchAll(/\n\s*-\s*A\.\s*/g)].map(match => match.index)

  for (let index = 0; index < optionStarts.length; index += 1) {
    const start = optionStarts[index]
    const end = index + 1 < optionStarts.length ? optionStarts[index + 1] : rewritten.length
    const before = rewritten.slice(Math.max(0, start - 1500), start)
    const segment = rewritten.slice(start, end)
    const optionsMatch = segment.match(/\n\s*-\s*A\.\s*([\s\S]*?)\n\s*-\s*B\.\s*([\s\S]*?)\n\s*-\s*C\.\s*([\s\S]*?)\n\s*-\s*D\.\s*([\s\S]*?)\n\s*-\s*\*\*答案：\*\*\s*([A-D])\.?/)
    if (!optionsMatch) continue

    const promptLines = before
      .split('\n')
      .map(line => line.trim())
      .reverse()
    const collected = []
    for (const line of promptLines) {
      if (!line) {
        if (collected.length === 0) continue
        break
      }
      if (/^(#|---|>|- |虽然|选项|伽马|动态|对亮度|使图像|提高图像|当 |r 是|c 是)/.test(line)) break
      if (/^\d+\./.test(line) && !/[?？]/.test(line)) break
      if (/^\*\*详细讲解/.test(line)) break
      collected.push(line)
      if (collected.join(' ').length > 420) break
    }
    const rawPrompt = collected.reverse().join('\n')
    const question = preferEnglishText(stripImages(normalizeText(rawPrompt)))
    if (!question || question.length < 8 || question.length > 700) continue

    const rawExplanation = segment.split(/\*\*详细讲解：\*\*/)[1] || ''
    const nextQuestionInExplanation = rawExplanation.search(/\n\s*\d+\.\s+[^\n]{0,220}[?？]/)
    const explanation = nextQuestionInExplanation >= 0
      ? rawExplanation.slice(0, nextQuestionInExplanation)
      : rawExplanation
    const options = [optionsMatch[1], optionsMatch[2], optionsMatch[3], optionsMatch[4]]
      .map(option => preferEnglishText(cleanInline(option.replace(/\n\s*---\s*\n\s*## Page\s+\d+\s*/g, ' '))))
    questions.push({
      id: '',
      title: question.split('\n')[0].slice(0, 80),
      question,
      images: extractImages(rawPrompt),
      options,
      answer: answerIndex(optionsMatch[5]),
      answers: answerIndexes(optionsMatch[5]),
      explanation: normalizeText(explanation).slice(0, 1600)
    })
  }
  return questions
}

function parseFinalCleanQuestions(markdown, sourceDir) {
  const rewritten = rewriteImagePaths(markdown, sourceDir)
  const questionBlocks = rewritten.split(/\n(?=### Q\d+)/g).filter(block => /^### Q\d+/m.test(block))

  return questionBlocks.map((block, index) => {
    const title = block.match(/^###\s+(Q\d+)/m)?.[1] || `Q${index + 1}`
    const answer = block.match(/\*\*Answer:\*\*\s*([A-D]{1,4})/i)?.[1] || 'A'
    const answerStart = block.search(/\*\*Answer:\*\*/i)
    const body = answerStart >= 0 ? block.slice(0, answerStart) : block
    const note = block.match(/\*\*Note:\*\*\s*([\s\S]*?)(?=\n---|\n## |\n### Q|$)/i)?.[1]
    const withoutHeading = body.replace(/^###\s+Q\d+.*$/m, '').trim()
    const firstOption = withoutHeading.search(/\n\s*-\s*A\.\s+/)
    const prompt = firstOption >= 0 ? withoutHeading.slice(0, firstOption) : withoutHeading
    const options = [...withoutHeading.matchAll(/\n\s*-\s*([A-D])\.\s*([\s\S]*?)(?=\n\s*-\s*[A-D]\.\s*|$)/g)]
      .map(match => cleanInline(match[2]))

    return {
      id: '',
      title,
      question: stripImages(prompt),
      images: extractImages(prompt),
      options,
      answer: answerIndex(answer),
      answers: answerIndexes(answer),
      explanation: normalizeText(note || `Correct answer: ${answer}`)
    }
  }).filter(question => question.question && question.options.length >= 2)
}

function parseCpuQuestions(markdown, sourceDir) {
  const rewritten = rewriteImagePaths(markdown, sourceDir)
  const questionBlocks = rewritten.split(/\n(?=### Question\s+\d+)/g).filter(block => /^### Question\s+\d+/m.test(block))

  const parsedQuestions = questionBlocks.map((block, index) => {
    const title = block.match(/^###\s+(Question\s+\d+)/m)?.[1] || `Question ${index + 1}`
    const answer = block.match(/\*\*Answer(?:\s*\/\s*答案)?\s*[：:]\s*([A-D]{1,4}|\d+)\*\*/i)?.[1]
      || block.match(/\*\*Answer:\*\*\s*([A-D]{1,4}|\d+)/i)?.[1]
    const explanation = block.match(/\*\*Brief Explanation\s*\/\s*简要解析[：:]\*\*\s*([\s\S]*?)(?=\n---|\n## |\n### Question|$)/i)?.[1]
    const body = block
      .replace(/^###\s+Question\s+\d+.*$/m, '')
      .split(/\*\*Answer(?:\s*\/\s*答案)?\s*[：:]/i)[0]
      .trim()
    const firstOption = body.search(/\n\s*[A-D]\.\s+/)
    const prompt = firstOption >= 0 ? body.slice(0, firstOption) : body
    const options = [...body.matchAll(/\n\s*([A-D])\.\s*([\s\S]*?)(?=\n\s*[A-D]\.\s*|\n---|$)/g)]
      .map(match => cleanInline(match[2]))

    return {
      id: '',
      title,
      question: stripImages(prompt).replace(/\*\*Question(?:\s*\(1 mark\))?:\s*([\s\S]*?)\*\*/i, '$1'),
      images: extractImages(prompt),
      options,
      answer: answer && /^[A-D]/i.test(answer) ? answerIndex(answer) : null,
      answers: answer && /^[A-D]/i.test(answer) ? answerIndexes(answer) : [],
      explanation: normalizeText(explanation || (answer ? `Correct answer: ${answer}` : 'No answer key is provided in this question bank.'))
    }
  }).filter(question => question.question && question.options.length >= 2)

  const seen = new Set()
  return parsedQuestions.filter(question => {
    const key = JSON.stringify([question.question, question.options])
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function parseFinalOcrQuestions(markdown, sourceDir) {
  const sourceRoot = path.basename(sourceDir)
  const pages = [...markdown.matchAll(/## Page\s+(\d+)[\s\S]*?!\[[^\]]*\]\(([^)]+)\)[\s\S]*?```text\n([\s\S]*?)```/g)]
  const entries = []
  const questions = []

  for (const page of pages) {
    const pageNumber = Number(page[1])
    const imageSrc = `/${sourceRoot}/${page[2].replace(/\\/g, '/')}`
    for (const line of page[3].split('\n')) {
      const text = line.trim()
      if (text) entries.push({ pageNumber, imageSrc, text })
    }
  }

  let buffer = []
  for (const entry of entries) {
    const answerMatch = entry.text.match(/Answer\s*[:：]\s*([A-D]{1,4})/i)
    if (answerMatch) {
      const parsed = parseFinalOcrBlock(buffer, answerMatch[1], entry)
      if (parsed) questions.push(parsed)
      buffer = []
    } else if (!/^No\.\s*\d+/i.test(entry.text)) {
      buffer.push(entry)
    }
  }

  return questions
}

function normalizeOcrLine(line) {
  return line
    .replace(/[°¢©•*]/g, '')
    .replace(/^[^\w(A-D]+/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function getOcrOption(line) {
  const trimmed = line.trim()
  const match = trimmed.match(/^[^\w]*[eE]?\s*([A-D])(?:[\.,:)]|\s|$)\s*(.*)$/)
  if (!match) return null
  return {
    letter: match[1],
    text: cleanInline(normalizeOcrLine(match[2] || match[1]))
  }
}

function parseFinalOcrBlock(buffer, answer, answerEntry) {
  const lines = buffer.map(item => ({ ...item, clean: normalizeOcrLine(item.text) }))
    .filter(item => item.clean && !/^Editable OCR text$/i.test(item.clean))
  const optionLines = []

  lines.forEach((line, index) => {
    const option = getOcrOption(line.text)
    if (option) optionLines.push({ ...option, index })
  })

  if (optionLines.length < 2) return null

  const firstOptionIndex = optionLines[0].index
  const question = normalizeText(lines.slice(0, firstOptionIndex).map(line => line.clean).join('\n'))
    .replace(/^(Features|ML)$/i, '')
    .trim()
  if (!question || question.length < 10) return null

  const options = optionLines.slice(0, 4).map((option, optionIndex) => {
    const current = optionLines[optionIndex]
    const next = optionLines[optionIndex + 1]
    const extraLines = lines
      .slice(current.index + 1, next ? next.index : lines.length)
      .map(line => line.clean)
      .filter(line => !/^No\./i.test(line))
    return cleanInline([current.text, ...extraLines].join(' '))
  }).filter(Boolean)

  if (options.length < 2) return null

  return {
    id: '',
    title: question.slice(0, 80),
    question,
    images: [{ alt: `Original page ${answerEntry.pageNumber}`, src: answerEntry.imageSrc }],
    options,
    answer: answerIndex(answer),
    answers: answerIndexes(answer),
    explanation: `OCR answer: ${answer}. This item was parsed from scanned OCR text; use the original page image to verify details.`
  }
}

function withIds(bankId, questions) {
  return questions.map((question, index) => ({
    ...question,
    id: `${bankId}-${index + 1}`,
    bankId,
    number: index + 1
  }))
}

const banks = []
const questions = []

for (const source of sources) {
  const { filePath, content } = readSource(source)
  const parsed = withIds(source.id, source.parser(content, path.dirname(filePath)))
  const bank = {
    id: source.id,
    title: source.title,
    ...(source.englishTitle && { englishTitle: source.englishTitle }),
    ...(source.ungraded && { ungraded: true }),
    ...(source.supportsMarks && { supportsMarks: true }),
    description: source.description,
    total: parsed.length
  }
  banks.push(bank)
  if (source.sections) {
    const categories = new Set(source.sections.map(section => section.category))
    for (const question of parsed) {
      if (!categories.has(question.category)) throw new Error(`Missing or invalid category for ${question.id}`)
    }
    for (const section of source.sections) {
      banks.push({
        ...bank,
        ...section,
        id: `${bank.id}-${section.category}`,
        parentBankId: bank.id,
        total: parsed.filter(question => question.category === section.category).length
      })
    }
  }
  questions.push(...parsed)
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(
  outputPath,
  `export const questionBanks = ${JSON.stringify(banks, null, 2)}\n\nexport const questions = ${JSON.stringify(questions, null, 2)}\n`,
  'utf8'
)

console.log(`Generated ${questions.length} questions across ${banks.length} banks.`)
