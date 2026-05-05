下面是一份**简单 React 网页答题系统开发文档**，偏向课程作业 / 小项目实现，功能包括：选择题库、答题、查看解析、单题提交、实时显示答案和解析、查看错误率、复习错题等。

~~~md
# React 网页答题系统开发文档

## 1. 项目概述

本项目是一个基于 React 的网页答题系统，用户可以选择不同题库进行答题。系统支持单题提交，提交后立即显示正确答案与解析，并记录用户答题情况。用户可以查看自己的错误率，也可以进入错题复习页面重新练习答错的题目。

---

## 2. 核心功能

### 2.1 选择题库

用户进入系统后，首先看到题库选择页面。

功能要求：

- 展示多个题库
- 每个题库显示：
  - 题库名称
  - 题目数量
  - 简单描述
- 用户点击某个题库后，进入该题库的答题页面

示例题库：

```js
const questionBanks = [
  {
    id: 1,
    title: 'React 基础题库',
    description: '包含 React 组件、props、state、hooks 等基础知识',
    total: 20
  },
  {
    id: 2,
    title: 'JavaScript 基础题库',
    description: '包含变量、函数、数组、对象、异步等基础知识',
    total: 30
  }
]
~~~

------

### 2.2 答题功能

进入题库后，用户可以逐题答题。

页面需要显示：

- 当前题号
- 题目内容
- 选项列表
- 提交按钮
- 下一题按钮
- 答题进度

题目数据结构示例：

```js
const questions = [
  {
    id: 1,
    bankId: 1,
    question: 'React 中 useState 的作用是什么？',
    options: [
      '发送网络请求',
      '定义组件状态',
      '创建路由',
      '修改 CSS 样式'
    ],
    answer: 1,
    explanation: 'useState 是 React Hook，用于在函数组件中定义和更新状态。'
  }
]
```

其中：

```js
answer: 1
```

表示正确答案是 `options[1]`，也就是第二个选项。

------

### 2.3 单题提交

每道题都可以单独提交。

用户选择一个选项后，点击“提交答案”。

提交逻辑：

- 如果用户没有选择选项，提示用户先选择答案
- 提交后判断是否正确
- 保存该题的答题结果
- 禁止重复修改当前题答案
- 显示正确 / 错误状态

简单逻辑示例：

```js
const handleSubmit = () => {
  if (selectedOption === null) {
    alert('请先选择一个答案')
    return
  }

  const isCorrect = selectedOption === currentQuestion.answer

  setAnswerRecords({
    ...answerRecords,
    [currentQuestion.id]: {
      selected: selectedOption,
      correct: isCorrect
    }
  })
}
```

------

### 2.4 提交后实时显示答案和解析

用户提交单题后，页面立即显示：

- 用户选择的答案
- 正确答案
- 是否答对
- 题目解析

显示规则：

```js
const record = answerRecords[currentQuestion.id]
```

如果 `record` 存在，说明该题已经提交。

页面可以显示：

```jsx
{record && (
  <div className="analysis-box">
    <p>
      {record.correct ? '回答正确' : '回答错误'}
    </p>

    <p>
      你的答案：
      {currentQuestion.options[record.selected]}
    </p>

    <p>
      正确答案：
      {currentQuestion.options[currentQuestion.answer]}
    </p>

    <p>
      解析：
      {currentQuestion.explanation}
    </p>
  </div>
)}
```

------

### 2.5 查看解析

解析可以在以下两种情况下显示：

#### 方式一：提交后自动显示

用户提交答案后，系统自动显示解析。

#### 方式二：点击“查看解析”按钮

如果需要单独控制解析显示，可以增加一个按钮：

```jsx
<button onClick={() => setShowExplanation(true)}>
  查看解析
</button>
```

推荐实现方式：

- 未提交前不允许查看解析
- 提交后可以查看解析
- 解析区域显示题目讲解和正确答案

------

### 2.6 查看错误率

系统需要统计用户的答题情况。

统计内容包括：

- 已答题数量
- 答对数量
- 答错数量
- 错误率
- 正确率

计算方式：

```js
const records = Object.values(answerRecords)

const totalAnswered = records.length
const correctCount = records.filter(item => item.correct).length
const wrongCount = totalAnswered - correctCount

const errorRate =
  totalAnswered === 0 ? 0 : wrongCount / totalAnswered

const accuracyRate =
  totalAnswered === 0 ? 0 : correctCount / totalAnswered
```

显示示例：

```jsx
<div className="stats-box">
  <p>已答题：{totalAnswered}</p>
  <p>答对：{correctCount}</p>
  <p>答错：{wrongCount}</p>
  <p>错误率：{(errorRate * 100).toFixed(1)}%</p>
  <p>正确率：{(accuracyRate * 100).toFixed(1)}%</p>
</div>
```

------

### 2.7 复习错题

系统需要提供错题复习功能。

错题来源：

- 用户已经提交过
- 并且回答错误的题目

筛选错题：

```js
const wrongQuestions = questions.filter(question => {
  const record = answerRecords[question.id]
  return record && record.correct === false
})
```

错题复习页面功能：

- 只展示答错的题目
- 可以重新答题
- 可以查看原来的错误答案
- 可以查看正确答案和解析
- 可以重新提交答案

错题页面显示内容：

- 题目内容
- 用户之前选错的答案
- 正确答案
- 解析
- 重新练习按钮

------

## 3. 页面设计

### 3.1 页面结构

项目可以分为以下几个页面：

```txt
首页 / 题库选择页
  ↓
答题页面
  ↓
结果统计页面
  ↓
错题复习页面
```

------

### 3.2 推荐路由设计

如果使用 `react-router-dom`：

```txt
/                     题库选择页
/bank/:bankId          答题页面
/result/:bankId        结果统计页面
/review/:bankId        错题复习页面
```

------

## 4. 组件设计

### 4.1 组件结构

```txt
src/
├── App.jsx
├── main.jsx
├── data/
│   └── questions.js
├── pages/
│   ├── BankSelectPage.jsx
│   ├── QuizPage.jsx
│   ├── ResultPage.jsx
│   └── ReviewWrongPage.jsx
├── components/
│   ├── QuestionCard.jsx
│   ├── OptionList.jsx
│   ├── AnalysisBox.jsx
│   └── StatsBox.jsx
└── styles/
    └── index.css
```

------

### 4.2 主要组件说明

#### BankSelectPage

负责展示题库列表。

主要功能：

- 渲染题库信息
- 点击题库进入答题页面

------

#### QuizPage

负责答题流程。

主要功能：

- 显示当前题目
- 选择答案
- 单题提交
- 显示正确答案和解析
- 切换上一题 / 下一题
- 记录答题结果

------

#### QuestionCard

负责显示单道题目。

包含：

- 题目标题
- 题目选项
- 提交按钮
- 答案状态
- 解析区域

------

#### AnalysisBox

负责显示答案和解析。

包含：

- 是否答对
- 用户选择的答案
- 正确答案
- 题目解析

------

#### StatsBox

负责显示答题统计。

包含：

- 已答题数
- 正确数
- 错误数
- 正确率
- 错误率

------

#### ReviewWrongPage

负责错题复习。

主要功能：

- 筛选错题
- 展示错题
- 查看解析
- 重新练习错题

------

## 5. 状态设计

### 5.1 核心状态

```js
const [currentIndex, setCurrentIndex] = useState(0)

const [selectedOption, setSelectedOption] = useState(null)

const [answerRecords, setAnswerRecords] = useState({})
```

说明：

```js
currentIndex
```

表示当前正在做第几题。

```js
selectedOption
```

表示用户当前选择的选项。

```js
answerRecords
```

用于保存所有题目的答题结果。

------

### 5.2 answerRecords 数据结构

```js
const answerRecords = {
  1: {
    selected: 2,
    correct: false
  },
  2: {
    selected: 0,
    correct: true
  }
}
```

说明：

- key 是题目 id
- selected 是用户选择的选项索引
- correct 表示是否答对

------

## 6. 基本答题流程

```txt
1. 用户进入首页
2. 用户选择题库
3. 系统加载该题库题目
4. 用户选择某一题的选项
5. 用户点击提交
6. 系统判断答案是否正确
7. 页面立即显示正确答案和解析
8. 用户点击下一题继续答题
9. 用户完成答题后查看统计结果
10. 用户可以进入错题复习页面
```

------

## 7. 核心功能伪代码

### 7.1 选择答案

```js
const handleSelectOption = (optionIndex) => {
  if (answerRecords[currentQuestion.id]) {
    return
  }

  setSelectedOption(optionIndex)
}
```

如果当前题已经提交过，就不允许继续修改答案。

------

### 7.2 提交答案

```js
const handleSubmitAnswer = () => {
  if (selectedOption === null) {
    alert('请先选择答案')
    return
  }

  const isCorrect = selectedOption === currentQuestion.answer

  setAnswerRecords(prev => ({
    ...prev,
    [currentQuestion.id]: {
      selected: selectedOption,
      correct: isCorrect
    }
  }))
}
```

------

### 7.3 下一题

```js
const handleNext = () => {
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1)
    setSelectedOption(null)
  }
}
```

需要注意：

如果下一题之前已经答过，需要恢复之前选择的答案。

可以这样写：

```js
useEffect(() => {
  const question = questions[currentIndex]
  const record = answerRecords[question.id]

  if (record) {
    setSelectedOption(record.selected)
  } else {
    setSelectedOption(null)
  }
}, [currentIndex])
```

------

### 7.4 统计错误率

```js
const getStats = () => {
  const records = Object.values(answerRecords)

  const total = records.length
  const correct = records.filter(item => item.correct).length
  const wrong = total - correct

  return {
    total,
    correct,
    wrong,
    errorRate: total === 0 ? 0 : wrong / total,
    accuracyRate: total === 0 ? 0 : correct / total
  }
}
```

------

### 7.5 获取错题

```js
const getWrongQuestions = () => {
  return questions.filter(question => {
    const record = answerRecords[question.id]
    return record && record.correct === false
  })
}
```

------

## 8. 本地存储设计

为了刷新页面后不丢失答题记录，可以使用 `localStorage`。

保存记录：

```js
localStorage.setItem('answerRecords', JSON.stringify(answerRecords))
```

读取记录：

```js
const savedRecords = JSON.parse(
  localStorage.getItem('answerRecords') || '{}'
)
```

推荐按照题库 id 分开保存：

```js
localStorage.setItem(
  `answerRecords-bank-${bankId}`,
  JSON.stringify(answerRecords)
)
```

这样不同题库之间不会互相影响。

------

## 9. 样式设计建议

页面整体可以使用简洁布局。

### 9.1 题库选择页

```txt
标题
题库卡片 1
题库卡片 2
题库卡片 3
```

### 9.2 答题页

```txt
当前进度：3 / 20

题目内容

A. 选项一
B. 选项二
C. 选项三
D. 选项四

提交答案

回答结果
正确答案
解析

上一题 / 下一题
查看统计
```

### 9.3 错题复习页

```txt
错题数量：5

错题 1
你的答案
正确答案
解析

错题 2
你的答案
正确答案
解析
```

------

## 10. 可扩展功能

后续可以继续增加：

- 多选题
- 判断题
- 填空题
- 题目收藏
- 随机抽题
- 计时功能
- 答题排行榜
- 按章节筛选题目
- 错题重新答对后移出错题本
- 导入 JSON 题库
- 管理员新增、编辑、删除题目

------

## 11. 推荐最小实现版本

如果只是做一个简单可运行版本，建议先完成以下功能：

```txt
1. 题库选择
2. 进入题库答题
3. 单选题选项点击
4. 单题提交
5. 提交后显示正确答案和解析
6. 记录答题结果
7. 显示正确率和错误率
8. 错题复习
```

这几个功能完成后，整个答题系统的核心流程就已经完整了。

------

## 12. 项目开发顺序建议

建议按照以下顺序开发：

```txt
第一步：准备题库数据
第二步：完成题库选择页面
第三步：完成答题页面
第四步：实现选择答案功能
第五步：实现单题提交功能
第六步：提交后显示答案和解析
第七步：记录答题结果
第八步：计算正确率和错误率
第九步：实现错题复习页面
第十步：加入 localStorage 持久化
```

------

## 13. 简化版数据流

```txt
questions 数据
    ↓
根据 bankId 筛选题目
    ↓
QuizPage 显示当前题
    ↓
用户选择答案
    ↓
点击提交
    ↓
保存到 answerRecords
    ↓
显示答案和解析
    ↓
统计正确率 / 错误率
    ↓
筛选错题进入 ReviewWrongPage

```