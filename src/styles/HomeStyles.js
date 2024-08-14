import styled, { keyframes } from 'styled-components';
import { colors } from './variables';
import { Link } from 'react-router-dom';

// 통통 튀는 애니메이션 정의
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// 배너 스타일
export const Banner = styled.div`
  display: flex;
  align-items: center; /* 수직 방향 중앙 정렬 */
  justify-content: center; /* 수평 방향 중앙 정렬 */
  height: 623px;
  background-color: ${colors.black}; /* 검정색 배경 */
  color: ${colors.white}; /* 흰색 글씨 */
  padding: 0 100px; /* 좌우 패딩 추가 */
  box-sizing: border-box;
`;

// 배너 텍스트 스타일
export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  flex: 1;
  margin-right: 20px;
  
  /* 애니메이션 초기 상태 설정 */
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 1.5s ease, transform 1.5s ease; /* 지속 시간을 1.5초로 설정 */

  /* 애니메이션을 적용할 상태 클래스 */
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 배너 제목 스타일
export const BannerHeading = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 42px;
  line-height: 1.2; /* 줄 간격 조정 */
`;

// 배너 부제목 스타일
export const BannerSubheading = styled.p`
  font-size: 62px;
  font-weight: 900;
  margin: 20px 0; /* 상하 여백 추가 */
  background: linear-gradient(45deg, ${colors.mainColor} 10%, #8BACFF 40%, ${colors.white} 90%); /* 그라데이션 색상 */
  -webkit-background-clip: text; /* 텍스트에 배경을 적용 */
  -webkit-text-fill-color: transparent; /* 텍스트 색상을 투명하게 만들어 배경이 보이도록 함 */
  text-align: center;
  line-height: 1.2; /* 줄 간격 조정 */
`;

// 로고 이미지 스타일
export const LogoImage = styled.img`
  height: 220px; /* 적절한 로고 크기로 설정 */
  margin-left: 20px; /* 텍스트와의 공간 확보 */
`;

// 버튼 스타일
export const PlayButton = styled(Link)`
  display: flex; /* 플렉스 박스를 사용하여 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  width: 250px;
  height: 80px;
  border-radius: 15px;
  background-color: ${colors.mainColor}; /* mainColor 사용 */
  color: ${colors.white}; /* 흰색 글씨 */
  font-size: 36px;
  font-weight: 600;
  text-decoration: none; /* 링크 밑줄 제거 */
  text-align: center;
  line-height: 80px; /* 버튼 중앙 정렬 */
  margin: 40px auto; /* 중앙 정렬을 위해 마진 추가 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 옅은 그림자 추가 */
  transition: box-shadow 0.3s ease; /* 그림자 전환 효과 */

  /* 애니메이션 적용 */
  animation: ${bounce} 2s infinite;
  
  /* 호버 시 효과 추가 */
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강조 */
  }
`;
