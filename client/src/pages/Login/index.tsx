// Login.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios, { AxiosError } from 'axios'
import { useAuth } from '../../authContext';
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
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      console.log('Handling login request...')
      const response = await axios.post('http://localhost:8080/users/login', {
        email,
        password,
      })

      console.log('Login response:', response.data)
      if (response.data.user) {
        setAuthenticated(true)
        console.log('Login successful. Redirecting to /')
        navigate('/')
      } else {
        console.error('Login failed. User not found.')
        toast.error('Senha ou e-mail incorretos')
      }
    } catch (error) {
      console.error('Error during authentication:', error)

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        console.log('Axios error status:', axiosError.response?.status)
        console.log('Axios error data:', axiosError.response?.data)
      }

      toast.error('Erro ao autenticar usuário. Tente novamente mais tarde.')
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
      <ToastContainer />
    </>
  )
}

export default Login
function setIsAuthenticated(arg0: boolean) {
  throw new Error('Function not implemented.')
}
