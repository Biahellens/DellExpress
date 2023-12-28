import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderTable, ImageCarousel } from '../../components'
import { Content, ContentTable, Logo, LogoImage, Text, LoadingContent, LoadingImage } from './style'
import logo from '../../assets/logo.svg'
import loading from '../../assets/loading.svg'
import { useAuth } from '../../authContext'

function Home() {
  const navigate = useNavigate();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsContentLoaded(true);
    }, 2000)

    return () => clearTimeout(timeoutId);
  }, [])

  useEffect(() => {
    if (isContentLoaded) {
      if (isAuthenticated) {
        navigate('/');
      } else {
        navigate('/login');
      }
    }
  }, [isContentLoaded, navigate, isAuthenticated])


  return (
    <>
    {isAuthenticated ? (
        <>
          <Logo>
            <LogoImage src={logo}/>
          </Logo>
          <ImageCarousel />
          <Content>
            <Text>Suas Entregas</Text>
            <ContentTable>
              <OrderTable />
            </ContentTable>
          </Content>
        </>
      ) : (
        <Content>
          <LoadingContent>
            <LoadingImage src={loading}/>
          </LoadingContent>
        </Content>
      )}
    </>
  )
}

export default Home