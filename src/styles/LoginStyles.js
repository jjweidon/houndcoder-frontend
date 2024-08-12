import styled from 'styled-components';
import { colors } from './variables'; // colors.js에서 색상 가져오기

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.backGray};
`;

export const Logo = styled.img`
  width: 500px;
  margin-bottom: 30px;
  margin-top: -100px;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 7px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
  color: ${colors.gray};
  padding: 0 15px;
  margin-bottom: 15px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 7px;
  background-color: ${colors.mainColor};
  color: ${colors.white};
  font-weight: 900;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
    }
`;

export const KakaoButton = styled(Button)`
  background-color: #F7E600;
  color: #3C1A1A;
`;

export const ExtraLink = styled.div`
    display: flex;
    justify-content: space-between; /* 자식 요소들을 양 끝에 배치 */
`

export const Link = styled.a`
  color: ${colors.mainColor};
  text-decoration: none;
  font-size: 14px;
  margin: 5px 30px;
  
  &:hover {
    text-decoration: underline;
  }
`;
