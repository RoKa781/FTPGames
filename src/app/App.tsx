import { Route, Routes } from 'react-router-dom';
import AppHeader from '../shared/components/AppHeader/AppHeader';
import GamesPage from '../features/FeatureHome/pages/GamesPage';
import GamePage from '../features/FeatureGame/pages/GamePage';
import NotFound from '../shared/pages/NotFound/NotFound';
import MainPage from '../features/FeatureMain/pages/MainPage';
import FavoritePage from '../features/FeatureFavorite/pages/FavoritePage';
import LoginPage from '../features/FeatureUser/pages/LoginPage/LoginPage';
import ProfilePage from '../features/FeatureUser/pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
