import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderTable, ImageCarousel, NewOrder } from '../../components'
import { Content, ContentHeader, ContentTable, Logo, LogoImage, Text, LoadingContent, LoadingImage, ButtonNew } from './style'
import logo from '../../assets/logo.svg'
import loading from '../../assets/loading.svg'
import { useAuth } from '../../authContext'

function Home() {
  const navigate = useNavigate()
  const [isContentLoaded, setIsContentLoaded] = useState(false)
  const { isAuthenticated } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsContentLoaded(true)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (isContentLoaded) {
      if (isAuthenticated) {
        navigate('/')
      } else {
        navigate('/login')
      }
    }
  }, [isContentLoaded, navigate, isAuthenticated])

  const fetchNewOrder = () => {
    try {
      setIsModalOpen(true)
    } catch (error) {
      console.error('Erro ao buscar detalhes do pedido:', error)
    }
  }


  return (
    <>
    {isAuthenticated ? (
        <>
          <Logo>
            <LogoImage src={logo}/>
          </Logo>
          <ImageCarousel />
          <Content>
            <ContentHeader>
              <Text>Suas Entregas</Text>
              <ButtonNew onClick={() => fetchNewOrder()}>+</ButtonNew>
            </ContentHeader>
            <ContentTable>
              <OrderTable />
            </ContentTable>
          </Content>
          {isModalOpen && (
            <NewOrder onClose={() => setIsModalOpen(false)} />
          )}
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