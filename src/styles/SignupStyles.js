import styled, { keyframes } from 'styled-components';
import { colors } from './variables';

// 좌에서 우로 스르륵 나타나는 애니메이션 정의
const slideIn = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

// 전체 페이지를 좌우로 나누는 컨테이너
export const SignupContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 왼쪽 반쪽을 설정
export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0px 20px;
`;

// 오른쪽 반쪽을 설정
export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 20px;
`;

// 로고 설정
export const Logo = styled.img`
  margin-top: -100px;
  height: 250px;
  margin-bottom: 100px;
`;

// 개발자의 자존심 설정: 좌측 정렬
export const Pride = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  text-align: left; /* 좌측 정렬 */
  width: 80%; /* 전체 폭을 사용하여 정렬을 좌측으로 설정 */
  opacity: 0; /* 애니메이션을 시작할 때 투명하게 설정 */
  animation: ${slideIn} 1.5s ease-in-out forwards; /* 애니메이션 적용 */
`;

// Slogan 설정: 중앙 정렬
export const Slogan = styled.h1`
  font-size: 52px;
  margin: 10px 0;
  text-align: center;
  width: 100%;
  background: linear-gradient(45deg, #4A4AFF 10%, #8BACFF 40%, #FFFFFF 90%); /* 그라데이션 색상 */
  -webkit-background-clip: text; /* 텍스트에 배경을 적용 */
  -webkit-text-fill-color: transparent; /* 텍스트 색상을 투명하게 만들어 배경이 보이도록 함 */
  opacity: 0; /* 애니메이션을 시작할 때 투명하게 설정 */
  animation: ${slideIn} 3s ease-in-out forwards; /* 애니메이션 적용 */
`;

// Description 설정: 우측 정렬
export const Description = styled.p`
  font-size: 28px;
  text-align: center; /* 우측 정렬 */
  margin-top: 100px;
  width: 100%; /* 전체 폭을 사용하여 정렬을 우측으로 설정 */
`;

// Title 설정
export const Title = styled.h1`
  font-size: 24px;
  margin-top: -100px;
`;

export const InputContainer = styled.div`
  width: 400px;
`

// 이메일 입력 박스와 인증 버튼을 포함하는 컨테이너 설정
export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

// 입력 박스 설정
export const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
  color: ${colors.gray};
  padding: 0 15px;
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

// 이메일 입력 박스 설정
export const EmailInput = styled(Input)`
  flex: 7;
  margin-right: 10px;
`;

// 인증 요청 버튼 설정
export const VerifyButton = styled.button`
    flex: 3;
  height: 50px;
  border-radius: 10px;
  background-color: ${colors.secondaryColor};
  color: ${colors.white};
  font-weight: 900;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
`;

// 버튼 설정
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
  margin-bottom: 20px;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }
`;

// 카카오 버튼 설정
export const KakaoButton = styled(Button)`
  background-color: #F7E600;
  color: #3C1A1A;
`;

// 추가 링크 컨테이너 설정
export const ExtraLink = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

// 링크 설정
export const Link = styled.a`
  color: ${colors.mainColor};
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
