import React from 'react';
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
  Input, 
  EmailContainer, 
  Button, 
  KakaoButton, 
  VerifyButton, 
  Link, 
  ExtraLink 
} from '../styles/SignupStyles';
import { EmailInput } from '../styles/SignupStyles';

const Signup = () => {
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
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        </InputContainer>
        <Button>회원가입</Button>
        <KakaoButton>카카오로 시작하기</KakaoButton>
        <ExtraLink>
          이미 계정이 있으신가요? <Link href="/login">로그인하기</Link>
        </ExtraLink>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;
