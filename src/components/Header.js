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
} from './HeaderStyles';

const HeaderComponent = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>
          <NavLink to="/">
          <LogoImg src="/images/logo1.png" alt="HoundCoder Logo" />
          <LogoImg src="/images/logo2.png" alt="HoundCoder Text Logo" />
          </NavLink>
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
            <AuthButton onClick={onLogout}>마이페이지</AuthButton>
          ) : (
            <NavLink to="/login"><AuthButton>로그인</AuthButton></NavLink>
          )}
        </Auth>
      </Header>
    </>
  );
};

export default HeaderComponent;
