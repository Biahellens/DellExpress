import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '../modal'
import {
  Content,
  Text,
  Table,
  Tbody,
  Thead,
  Td,
  Tr,
  Th,
  Image,
  PaginationButton,
  ContentPagination,
  TextPagination
} from './style'
import received from '../../assets/received.svg'
import approved from '../../assets/approved.svg'
import separation from '../../assets/separation.svg'
import sent from '../../assets/sent.svg'
import delivered from '../../assets/delivered.svg'
import OrderData from './interface'

function OrderTable() {
  const [ordersData, setOrdersData] = useState<OrderData[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleOrderStatusChange = (orderId: number, newStatus: string) => {
    const updatedOrdersData = ordersData.map((order) =>
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    )
    setOrdersData(updatedOrdersData)
  }

  const handleSort = () => {
    const sortedOrders = [...ordersData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.orderStatus.localeCompare(b.orderStatus)
      } else {
        return b.orderStatus.localeCompare(a.orderStatus)
      }
    })
    setOrdersData(sortedOrders)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders')
        setOrdersData(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados dos pedidos:', error)
      }
    }

    fetchOrders()
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentOrders = ordersData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(ordersData.length / itemsPerPage)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderData | null>(null)

  const fetchOrderDetails = async (orderId: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/orders/${orderId}`)
      setOrderDetails(response.data)
      setIsModalOpen(true)
    } catch (error) {
      console.error('Erro ao buscar detalhes do pedido:', error)
    }
  }

  const statusImages: Record<string, string> = {
    'Pedido Realizado': received,
    'Pedido Aprovado': approved,
    'Pedido em Separação': separation,
    'Pedido Enviado': sent,
    'Pedido Entregue': delivered,
  }

  const getStatusImage = (order: OrderData) => {
    const selectedStatusImage = statusImages[order.orderStatus] || received
    return selectedStatusImage
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Content>
      <Table>
        <Thead>
          <Tr>
            <Th $size="small">ID</Th>
            <Th $size="large">NOME DO CLIENTE</Th>
            <Th>ENDEREÇO</Th>
            <Th $size="medium" onClick={handleSort} style={{ cursor: 'pointer' }}>
              STATUS
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentOrders.map((order) => (
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

      <ContentPagination>
        <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </PaginationButton>
        <TextPagination>Página {currentPage} de {totalPages}</TextPagination>
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= ordersData.length}>
          Próxima
        </PaginationButton>
      </ContentPagination>

      {isModalOpen && (
        <Modal order={orderDetails} onClose={() => setIsModalOpen(false)} onOrderStatusChange={handleOrderStatusChange} />
      )}
    </Content>
  )
}

export default OrderTable
