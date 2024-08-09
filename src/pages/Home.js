import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Banner,
  BannerText,
  BannerHeading,
  BannerSubheading,
  LogoImage,
  PlayButton,
} from '../styles/HomeStyles'; // 스타일 컴포넌트 파일을 가져옵니다

const Home = () => {
  const bannerTextRef = useRef(null);
  const location = useLocation(); // 현재 경로를 가져옵니다

  useEffect(() => {
    // 페이지가 이동할 때마다 애니메이션을 트리거합니다
    if (bannerTextRef.current) {
      bannerTextRef.current.classList.remove('visible'); // 기존 'visible' 클래스 제거
      void bannerTextRef.current.offsetWidth; // 강제로 리플로우를 발생시킵니다
      bannerTextRef.current.classList.add('visible'); // 'visible' 클래스 다시 추가
    }
  }, [location]); // 경로가 변경될 때마다 이 useEffect가 실행됩니다

  return (
    <div>
      <Banner>
        <BannerText ref={bannerTextRef}>
          <BannerHeading>"실력있는 개발자 중에 타자 느린 사람 없다"</BannerHeading>
          <BannerSubheading>코드 타속 향상을 돕는 타이핑 게임</BannerSubheading>
        </BannerText>
        <LogoImage src="/images/logo2_white.png" alt="HoundCoder Text Logo" />
      </Banner>
      <PlayButton to="/game/practice">게임하기</PlayButton>
    </div>
  );
};

export default Home;
