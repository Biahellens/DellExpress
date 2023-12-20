import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content, ContentText, ContentImage, LogoContent, LogoImage, Image, TextArea, FormContent, Input, Text, Button } from './style'

import logo from '../../assets/logo.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Content>
        <ContentImage>
          <Image />
        </ContentImage>
        <ContentText>
          <LogoContent>
            <LogoImage src={logo} />
          </LogoContent>
          <TextArea>
            <Text>LOGIN</Text>
            <form>
              <FormContent>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                />
                <Input
                  type="text"
                  placeholder="Senha"
                  value={password}
                />
              </FormContent>
              <Button type="submit">Login</Button>
            </form>
          </TextArea>
        </ContentText>
      </Content>
    </>
  );
};

export default Login;