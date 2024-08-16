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
  ErrorMessage, 
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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('비밀번호는 8~16자의 영문자, 숫자, 특수문자를 조합하여야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <SignupContainer>
      <LeftSection>
        <Logo src="/logos/logo_txt_white.png" alt="로고" />
        <Pride>개발자의 자존심</Pride>
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
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur} // 입력 필드를 벗어날 때 유효성 검사
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </IconWrapper>
          </PasswordWrapper>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <PasswordWrapper>
            <Input 
              type={showConfirmPassword ? 'text' : 'password'} 
              placeholder="비밀번호 확인" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPasswordBlur}
            />
            <IconWrapper onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </IconWrapper>
          </PasswordWrapper>
          {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
        <Button>회원가입</Button>
        <KakaoButton>카카오로 시작하기</KakaoButton>
        </InputContainer>
        <LoginLink>
          이미 계정이 있으신가요? <Link href="/login">로그인하기</Link>
        </LoginLink>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;
