import styled from 'styled-components';
import { colors } from '../styles/colors'; // 색상 값이 담긴 파일
import { Link } from 'react-router-dom';

// 배너 스타일
export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 623px;
  background-color: #000000; /* 검정색 배경 */
  color: #ffffff; /* 흰색 글씨 */
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
  margin-right: 20px; /* 로고와의 공간 확보 */
  
  /* 애니메이션 초기 상태 설정 */
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 1s ease, transform 1s ease;

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
  background: linear-gradient(45deg, #4A4AFF 10%, #8BACFF 40%, #FFFFFF 90%); /* 그라데이션 색상 */
  -webkit-background-clip: text; /* 텍스트에 배경을 적용 */
  -webkit-text-fill-color: transparent; /* 텍스트 색상을 투명하게 만들어 배경이 보이도록 함 */
  text-align: center;
  line-height: 1.2; /* 줄 간격 조정 */
`;

// 로고 이미지 스타일
export const LogoImage = styled.img`
  height: 700px; /* 적절한 로고 크기로 설정 */
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
  margin: 20px auto; /* 중앙 정렬을 위해 마진 추가 */
  display: block; /* 블록 요소로 만들어 중앙 정렬 */
`;
