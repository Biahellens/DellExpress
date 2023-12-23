import React from 'react'
import { OrderTable, ImageCarousel } from '../../components'
import { Content, ContentTable, Logo, LogoImage, Text, LoadingContent, LoadingImage } from './style'
import logo from '../../assets/logo.svg'
import loading from '../../assets/loading.svg'
import { useAuth } from '../../authContext'

function Home() {
  const { isAuthenticated } = useAuth()

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