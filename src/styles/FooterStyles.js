// src/styles/FooterStyles.js
import styled from 'styled-components';
import { colors } from './variables';

export const FooterWrapper = styled.footer`
  background-color: ${colors.white};
  color: ${colors.gray};
  border-top: 0.5px solid ${colors.gray};
  padding: 30px 0px;
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 자식 요소들 사이의 간격 */
  flex-wrap: wrap; /* 화면 크기에 따라 요소들이 줄바꿈 될 수 있도록 설정 */
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  & img {
    width: 24px;
    height: 24px;
  }
`;
