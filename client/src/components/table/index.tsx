import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Componentes
import { Content, Text, Table, Tbody, Thead, Td, Tr, Th, Image } from './style'
import Modal from '../modal'

// Imagens
import received from '../../assets/received.svg'
import approved from '../../assets/approved.svg'
import separation from '../../assets/separation.svg'
import sent from '../../assets/sent.svg'
import delivered from '../../assets/delivered.svg'

//import ordersData from '../modal/content.json'
import OrderData from './interface'

function OrderTable() {
  const [ordersData, setOrdersData] = useState<OrderData[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders')
        console.log('Dados dos pedidos:', response.data)
        setOrdersData(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados dos pedidos:', error)
      }
    }

    fetchOrders()
  }, [])

  // Responsável pelo controle do modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderData | null>(null)

  const fetchOrderDetails = async (orderId: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/orders/${orderId}`)
      console.log(response)
      setOrderDetails(response.data)
      setIsModalOpen(true)
    } catch (error) {
      console.error('Erro ao buscar detalhes do pedido:', error)
    }
  }

  // Controla qual imagem aparece de acordo com o status do pedido
  const statusImages: Record<string, string> = {
    'Pedido Recebido': received,
    'Pedido Aprovado': approved,
    'Pedido em Separação': separation,
    'Pedido Enviado': sent,
    'Pedido Entregue': delivered,
  }

  const getStatusImage = (order: OrderData) => {
    const selectedStatusImage = statusImages[order.orderStatus] || received
    return selectedStatusImage
  }

  return (
    <Content>
      <Table>
        <Thead>
          <Tr>
            <Th  $size="small">
              ID
            </Th>
            <Th $size="large">
              NOME DO CLIENTE
            </Th>
            <Th>
              ENDEREÇO
            </Th>
            <Th $size="medium">
              STATUS
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {ordersData.map((order) => (
            <Tr key={order.id} onClick={() => fetchOrderDetails(order.id)}>
              <Td>
                <Text>{order.id}</Text>
              </Td>
              <Td>
                <Text>{order.customerName}</Text>
              </Td>
              <Td>
                <Text>{order.addressDelivery}</Text>
              </Td>
              <Td>
                <Image src={getStatusImage(order)} alt={order.orderStatus} />
                <Text>{order.orderStatus}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isModalOpen && (
        <Modal order={orderDetails} onClose={() => setIsModalOpen(false)} />
      )}
    </Content>
  )
}

export default OrderTable