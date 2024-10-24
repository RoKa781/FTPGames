import { Route, Routes } from 'react-router-dom'
import AppHeader from '../shared/components/AppHeader/AppHeader'
import HomePage from '../features/FeatureHome/pages/HomePage'
import GamePage from '../features/FeatureGame/pages/GamePage'
import NotFound from '../shared/pages/NotFound/NotFound'

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
