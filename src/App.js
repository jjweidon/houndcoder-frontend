// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PracticeGame from './pages/PracticeGame';
import RankingGame from './pages/RankingGame';
import CoderRanking from './pages/CoderRanking';
import Shop from './pages/Shop';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import './App.css'; // 전역 스타일을 위한 CSS 파일

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/practice" element={<PracticeGame />} />
          <Route path="/game/ranking" element={<RankingGame />} />
          <Route path="/ranking" element={<CoderRanking />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
