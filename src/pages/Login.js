import React from 'react';
import { LoginContainer, Logo, Input, Button, KakaoButton, Link, ExtraLink } from '../styles/LoginStyles';

const Login = () => {
  return (
    <LoginContainer>
      <Logo src="/logos/logo_ver.png" alt="로고" />
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button>로그인</Button>
      <KakaoButton>카카오 로그인</KakaoButton>
      <ExtraLink>
        <Link href="/forgot-password">비밀번호 찾기</Link>
        <Link href="/signup">회원가입</Link>
      </ExtraLink>
    </LoginContainer>
  );
};

export default Login;
