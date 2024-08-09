// src/components/HeaderStyles.js
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* 작은 화면에서 왼쪽 정렬 */
  }
`;

// 로고 스타일
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    position: relative;
`;

export const LogoImg = styled.img`
    height: 40px;
    margin-right: 0px; /* 로고 사이의 여백 */
    flex-shrink: 0; /* 로고가 줄어들지 않도록 설정 */

    @media (max-width: 768px) {
        &:last-child {
            display: none; /* 화면이 작아지면 두 번째 로고 숨김 */
        }
    }
`;

// 네비게이션 스타일
export const Nav = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        margin-left: 50%;
    }
`;

export const NavUl = styled.ul`
    display: flex;
    margin-left: -300px; /* 좌측으로 이동 */

    @media (max-width: 768px) {
        margin-left: 0;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

export const NavLi = styled.li`
    list-style: none; /* 글머리 기호 숨김 */
    font-size: 20px; /* 기본 글자 크기 */
    margin: 0 50px; /* 좌우 여백 추가 */
    white-space: nowrap; /* 줄바꿈 방지 */

    @media (max-width: 768px) {
    font-size: 16px; /* 작은 화면에서 글자 크기 줄이기 */
    margin: 0 20px; /* 작은 화면에서 좌우 여백 줄이기 */
  }
`;

export const NavLink = styled(Link)`
    text-decoration: none; /* 밑줄 제거 */
    font-weight: 600;
    color: ${colors.black};
    &:hover {
    font-weight: 900; /* 호버 시 더 굵게 */
    }

    @media (max-width: 768px) {
    font-size: 18px;
    }
`;

// 인증 관련 스타일
export const Auth = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 10px;
    }
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

    /* 로그인 버튼이 화면 크기에 상관없이 고정된 크기 유지 */
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */

    &:hover {
    opacity: 0.8;
    }
`;
