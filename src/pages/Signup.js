import React, { useState } from 'react';
import axios from 'axios';
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
  PwWrapper, 
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
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // 이메일 입력 시 기존의 오류 메시지 초기화
  };

  const handleVerifyEmail = async () => {
    try {
      const response = await axios.post('/api/v1/check/email', { email });

      if (response.data.exists) {
        setEmailError('이미 존재하는 이메일입니다.');
      } else {
        // 여기서 이메일 인증 요청을 진행할 수 있습니다.
        console.log('이메일 인증을 진행합니다.');
      }
    } catch (error) {
      console.error('이메일 확인 중 오류가 발생했습니다.', error);
      setEmailError('이메일 확인 중 오류가 발생했습니다.');
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('비밀번호는 8~16자의 영문자, 숫자, 특수문자를 조합해야 합니다.');
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
          <EmailInput 
              type="email" 
              placeholder="이메일" 
              value={email}
              onChange={handleEmailChange}
            />
            <VerifyButton onClick={handleVerifyEmail}>인증 요청</VerifyButton>
          </EmailContainer>
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <PwWrapper>
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </IconWrapper>
          </PwWrapper>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <PwWrapper>
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
          </PwWrapper>
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
