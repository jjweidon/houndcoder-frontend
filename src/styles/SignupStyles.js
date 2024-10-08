import styled, { keyframes } from 'styled-components';
import { colors } from './variables';

// 타이핑 효과 애니메이션 정의
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  0% { border-right: 2px solid transparent; }
  100% { border-right: 2px solid ${colors.white}; }
`;

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

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
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
  white-space: nowrap;
  overflow: hidden; /* 넘치는 부분 숨기기 */
  border-right: 2px solid ${colors.black}; /* 커서 효과 */
  animation: ${typing} 4s steps(40, end), ${blink} 0.75s step-end infinite; /* 애니메이션 적용 */
`;

// Description 설정
export const Description = styled.p`
  font-size: 28px;
  text-align: center; /* 중앙 정렬 */
  margin-top: 100px;
  width: 100%; /* 전체 폭을 사용하여 애니메이션 적용 */
  overflow: hidden; /* 넘치는 부분 숨기기 */
  white-space: nowrap; /* 텍스트가 줄바꿈 되지 않도록 설정 */
  position: relative;
  display: inline-block;

  /* 애니메이션을 위한 텍스트 설정 */
  &:before {
    content: attr(data-text);
    position: absolute;
    left: 100%;
    white-space: nowrap;
    animation: ${marquee} 8s linear infinite; /* 애니메이션 적용 */
  }

  /* 문구가 끝까지 사라지기 전에 지연을 없애기 위해 기본 애니메이션 설정 */
  animation: ${marquee} 8s linear infinite;
`;

// Title 설정
export const Title = styled.h1`
  font-size: 24px;
  margin-top: -100px;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px; 
`;


// 이메일 입력 박스와 인증 버튼을 포함하는 컨테이너 설정
export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

// 입력 박스와 아이콘을 감싸는 컨테이너 설정
export const PwWrapper = styled.div`
  display: flex; /* Flexbox를 사용하여 자식 요소 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  position: relative; /* 자식 요소의 절대 위치를 기준으로 설정 */
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: ${colors.error};
  font-size: 11px;
  margin-top: -15px;
`;

// 입력 박스 설정
export const Input = styled.input`
  flex: 1; /* 입력 박스가 가능한 모든 공간을 차지하도록 설정 */
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${colors.gray};
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 16px;
  box-sizing: border-box;
  padding-right: 40px; /* 아이콘 공간을 고려하여 오른쪽 여백 설정 */
  padding: 0px 20px;

  &::placeholder {
    color: ${colors.gray};
  }

  &:focus {
    border-color: ${colors.main}; // 포커스 시 테두리 색상 설정
    outline: none; // 기본 아웃라인 제거
    // box-shadow: 0 0 5px ${colors.main}; // 선택 시 약간의 그림자 효과 추가
  }

  ${props => props.onError && `
    border-color: ${colors.errorColor}; // 에러 발생 시 테두리 색상
    box-shadow: 0 0 5px ${colors.errorColor}; // 에러 발생 시 그림자 효과
  `}
`;

export const IconWrapper = styled.div`
  color: ${colors.gray};
  font-size: 20px; /* 아이콘 크기 조정 */
  cursor: pointer;
  position: absolute; /* 절대 위치를 사용하여 Input 내부에서 위치 설정 */
  right: 20px; /* 입력 박스의 오른쪽 여백 */
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
`;

// 버튼 설정
export const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 7px;
  background-color: ${colors.main};
  color: ${colors.white};
  font-weight: 900;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
;
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
export const LoginLink = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

// 링크 설정
export const Link = styled.a`
  color: ${colors.main};
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;