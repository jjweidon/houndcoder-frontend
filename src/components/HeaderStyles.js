// src/components/HeaderStyles.js
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../styles/colors';
import { Link } from 'react-router-dom';

// 전역 스타일 정의
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

// 헤더 스타일
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${colors.white}; /* 흰색 배경 */
  border-bottom: 1px solid ${colors.gray};
`;

// 로고 스타일
export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    margin-right: 10px; /* 로고 사이의 여백 */
`;

// 네비게이션 스타일
export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavUl = styled.ul`
    display: flex;
    list-style: none; /* 글머리 기호 숨김 */
    padding: 0;
    margin-left: -300px; /* 좌측으로 이동 */
`;

export const NavLi = styled.li`
    font-size: 20px;
    margin: 0 50px; /* 좌우 여백 추가 */
`;

export const NavLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  font-weight: 600;
  color: ${colors.black};
  &:hover {
    font-weight: 900; /* 호버 시 더 굵게 */
  }
`;

// 인증 관련 스타일
export const Auth = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.button`
  color: ${colors.white};
  background: ${colors.mainColor};
  font-weight: 900;
  border: none;
  cursor: pointer;
  font-size: 16px; /* 버튼 텍스트 크기 조정 */
  border-radius: 5px;
  padding: 10px 40px;
  
  &:hover {
    opacity: 0.8;
  }
`;
