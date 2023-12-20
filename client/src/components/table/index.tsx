import React, { useState } from 'react'

// Componentes
import { Content, Text, Table, Tbody, Thead, Td, Tr, Th, Image } from './style'
import Modal from '../modal'

// Imagens
import received from '../../assets/received.svg'
import approved from '../../assets/approved.svg'
import separation from '../../assets/separation.svg'
import sent from '../../assets/sent.svg'
import delivered from '../../assets/delivered.svg'

import ordersData from '../modal/content.json'
import Order from '../modal/order'

function OrderTable() {
  // Responsável pelo controle do modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const openModal = (order: Order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedOrder(null)
    setIsModalOpen(false)
  }

  // Controla qual imagem aparece de acordo com o status do pedido
  const statusImages: Record<string, string> = {
    'Pedido Recebido': received,
    'Pedido Aprovado': approved,
    'Pedido em Separação': separation,
    'Pedido Enviado': sent,
    'Pedido Entregue': delivered,
  }

  const getStatusImage = (order: Order) => {
    const selectedStatusImage = statusImages[order.status] || received
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
            <Tr key={order.id} onClick={() => openModal(order)}>
              <Td>
                <Text>{order.id}</Text>
              </Td>
              <Td>
                <Text>{order.customerName}</Text>
              </Td>
              <Td>
                <Text>{order.address}</Text>
              </Td>
              <Td>
                <Image src={getStatusImage(order)} alt={order.status} />
                <Text>{order.status}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isModalOpen && (
        <Modal order={selectedOrder} onClose={closeModal} />
      )}
    </Content>
  )
}

export default OrderTable