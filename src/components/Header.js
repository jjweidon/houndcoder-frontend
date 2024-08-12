// src/components/Header.js
import React from 'react';
import {
  Header,
  Logo,
  LogoImg,
  Nav,
  NavUl,
  NavLi,
  NavLink,
  Auth,
  AuthButton,
  GlobalStyle,
} from '../styles/HeaderStyles';

const HeaderComponent = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo to="/">
          <LogoImg src="/logos/logo.png" alt="HoundCoder Logo" />
          <LogoImg src="/logos/logo_txt.png" alt="HoundCoder Text Logo" />
        </Logo>
        <Nav>
          <NavUl>
            <NavLi><NavLink to="/game/practice">연습게임</NavLink></NavLi>
            <NavLi><NavLink to="/game/ranking">랭킹게임</NavLink></NavLi>
            <NavLi><NavLink to="/ranking">코더랭킹</NavLink></NavLi>
            <NavLi><NavLink to="/shop">하운드숍</NavLink></NavLi>
          </NavUl>
        </Nav>
        <Auth>
          {isLoggedIn ? (
            <NavLi><NavLink to="/mypage">마이페이지</NavLink></NavLi>
          ) : (
            <NavLi><NavLink to="/login"><AuthButton>로그인</AuthButton></NavLink></NavLi>
          )}
        </Auth>
      </Header>
    </>
  );
};

export default HeaderComponent;
