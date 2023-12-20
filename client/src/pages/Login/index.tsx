import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content, ContentImage, Image, TextArea, FormContent, Input, Text, Button, BarOne, BarTwo, BarThree } from './style'

import map  from '../../assets/image_60.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [medicalPlan, setMedicalPlan] = useState('');

  return (
    <div>
      <Content>
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
                placeholder="Plano Médico"
                value={medicalPlan}
              />
            </FormContent>
            <Button type="submit">Login</Button>
          </form>
        </TextArea>
        <ContentImage>
          <Image src={map} />
          <BarThree />
          <BarTwo />
          <BarOne />
        </ContentImage>
      </Content>
    </div>
  );
};

export default Login;