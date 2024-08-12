// src/components/Footer.js
import React from 'react';
import { FooterWrapper, FooterLink } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <div>운영자: jjweidon</div>
        <div>연락처: 010-8232-5664</div>
        <div>이메일: woongcjs88@naver.com</div>
        <FooterLink href="https://github.com/jjweidon" target="_blank" rel="noopener noreferrer" aria-label="Github">
        <img src="/icons/github_icon.svg" alt="Github" />
      </FooterLink>
      <FooterLink href="https://www.instagram.com/on__my__wei" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src="/icons/instagram_icon.svg" alt="Instagram" />
      </FooterLink>
    </FooterWrapper>
  );
};

export default Footer;
