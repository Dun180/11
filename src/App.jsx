import { Navigate, Route, Routes } from 'react-router-dom'
import BankSelectPage from './pages/BankSelectPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import ReviewWrongPage from './pages/ReviewWrongPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BankSelectPage />} />
      <Route path="/bank/:bankId" element={<QuizPage />} />
      <Route path="/bank/:bankId/random" element={<QuizPage randomize />} />
      <Route path="/bank/:bankId/marked" element={<QuizPage markedOnly />} />
      <Route path="/result/:bankId" element={<ResultPage />} />
      <Route path="/review/:bankId" element={<ReviewWrongPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
