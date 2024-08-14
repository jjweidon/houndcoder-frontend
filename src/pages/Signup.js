import React, { useState } from 'react';
import { 
  SignupContainer, 
  LeftSection, 
  RightSection, 
  Logo, 
  Pride, 
  Title, 
  Slogan,
  Description, 
  InputContainer, 
  PasswordWrapper, 
  Input, 
  IconWrapper, 
  EmailContainer, 
  Button, 
  KakaoButton, 
  VerifyButton, 
  Link, 
  LoginLink
} from '../styles/SignupStyles';
import { EmailInput } from '../styles/SignupStyles';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SignupContainer>
      <LeftSection>
        <Logo src="/logos/logo_txt_white.png" alt="로고" />
        <Pride>"개발자의 자존심"</Pride>
        <Slogan>코드 타속 향상을 돕는 타이핑 게임</Slogan>
        <Description>게임을 하고 랭킹 상위권에 들어보세요!</Description>
      </LeftSection>
      <RightSection>
        <Title>계정을 생성하세요</Title>
        <InputContainer>
          <EmailContainer>
            <EmailInput type="email" placeholder="이메일" />
            <VerifyButton>인증 요청</VerifyButton>
          </EmailContainer>
          <PasswordWrapper>
            <Input type={showPassword ? 'text' : 'password'} placeholder="비밀번호" />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </IconWrapper>
          </PasswordWrapper>
          <PasswordWrapper>
            <Input type={showConfirmPassword ? 'text' : 'password'} placeholder="비밀번호 확인" />
            <IconWrapper onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </IconWrapper>
          </PasswordWrapper>
        </InputContainer>
        <Button>회원가입</Button>
        <KakaoButton>카카오로 시작하기</KakaoButton>
        <LoginLink>
          이미 계정이 있으신가요? <Link href="/login">로그인하기</Link>
        </LoginLink>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;
