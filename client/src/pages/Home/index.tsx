import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderTable, ImageCarousel, NewOrder } from '../../components'
import {
  Content,
  ContentHeader,
  ContentTable,
  Logo,
  LogoImage,
  Text,
  LoadingContent,
  LoadingImage,
  ButtonNew,
  StatusFilter,
  SelectFilter,
} from './style'

import logo from '../../assets/logo.svg'
import loading from '../../assets/loading.svg'

import { useAuth } from '../../authContext'

function Home() {
  const navigate = useNavigate()
  const [isContentLoaded, setIsContentLoaded] = useState(false)
  const { isAuthenticated } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('')

  const handleStatusChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedStatus(event.target.value)
  }

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
    setIsModalOpen(true)
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Logo>
            <LogoImage src={logo} />
          </Logo>
          <ImageCarousel />
          <Content>
            <ContentHeader>
              <Text>Suas Entregas</Text>
              <StatusFilter>
                <SelectFilter onChange={handleStatusChange} value={selectedStatus}>
                  <option value="" disabled>Filtrar por status:</option>
                  <option value="all">Todos</option>
                  <option value="Pedido Realizado">Pedido Realizado</option>
                  <option value="Pedido Aprovado">Pedido Aprovado</option>
                  <option value="Pedido em Separação">Pedido em Separação</option>
                  <option value="Pedido Enviado">Pedido Enviado</option>
                  <option value="Pedido Entregue">Pedido Entregue</option>
                </SelectFilter>
              </StatusFilter>
              <ButtonNew onClick={() => fetchNewOrder()}>+</ButtonNew>
            </ContentHeader>
            <ContentTable>
              <OrderTable selectedStatus={selectedStatus} />
            </ContentTable>
          </Content>
          {isModalOpen && <NewOrder onClose={() => setIsModalOpen(false)} />}
        </>
      ) : (
        <Content>
          <LoadingContent>
            <LoadingImage src={loading} />
          </LoadingContent>
        </Content>
      )}
    </>
  )
}

export default Home
