import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Content,
  ContentText,
  ContentImage,
  LogoContent,
  LogoImage,
  Image,
  TextArea,
  FormContent,
  Input,
  Text,
  Button,
} from './style'
import logo from '../../assets/logo.svg'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        navigate('/')
      } else {
        console.error('Falha ao verificar autenticação')
      }
    } catch (error) {
      console.error('Ocorreu um erro durante a autenticação', error)
    }
  }

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
            <form onSubmit={handleSubmit}>
              <FormContent>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormContent>
              <Button type="submit">Login</Button>
            </form>
          </TextArea>
        </ContentText>
      </Content>
    </>
  )
}

export default Login
