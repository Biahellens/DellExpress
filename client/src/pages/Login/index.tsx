import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        email,
        password,
      })

      if (response.data.user) {
        navigate('/')
      } else {
        console.error('Falha ao verificar autenticação')
        toast.error('Senha ou e-mail incorretos')
      }
    } catch (error) {
      console.error('Ocorreu um erro durante a autenticação', error)
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
