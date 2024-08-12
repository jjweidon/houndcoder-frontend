import React from 'react';
import { GameSelectContainer, GameBox } from '../styles/GameSelectStyles'; // 스타일 컴포넌트 파일을 가져옵니다

const GameSelect = () => {
  return (
    <GameSelectContainer>
      <GameBox to="/game/practice">연습게임</GameBox>
      <GameBox to="/game/ranking">랭킹게임</GameBox>
      <GameBox to="/game/pvp">1vs1배틀</GameBox>
    </GameSelectContainer>
  );
};

export default GameSelect;
