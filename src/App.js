// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PracticeGame from './pages/PracticeGame';
import RankingGame from './pages/RankingGame';
import CoderRanking from './pages/CoderRanking';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import GameSelect from './pages/GameSelect';
import PvpGame from './pages/PvpGame';
import { GlobalStyle, AppContainer } from './styles/GlobalStyles';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameSelect />} />
          <Route path="/game/practice" element={<PracticeGame />} />
          <Route path="/game/ranking" element={<RankingGame />} />
          <Route path="/game/pvp" element={<PvpGame />} />
          <Route path="/ranking" element={<CoderRanking />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </main>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
