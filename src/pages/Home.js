import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    // 컴포넌트가 렌더링되면 'visible' 클래스 추가
    if (bannerTextRef.current) {
      bannerTextRef.current.classList.add('visible');
    }
  }, []);

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
