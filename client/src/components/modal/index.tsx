import React from 'react'
import { connect } from 'react-redux'

// Componentes e imagem do projeto
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalHeaderId,
  TextArea,
  Text,
  ModalBody,
  Image,
  CloseButton,
  Select,
  SelectOption
} from './style'
import delivery from '../../assets/delivery.svg'

import Order from './interface'
import { setOrderStatus } from './orderStatus/orderActions'

interface ModalProps {
  order: Order | null
  onClose: () => void
}

// Responsavel pelo o status do pedido
interface RootState {
  order: {
    selectedStatus: string
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedStatus: state.order.selectedStatus,
})

const mapDispatchToProps = {
  setOrderStatus,
}

const Modal: React.FC<ModalProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps> = ({
  order,
  onClose,
  selectedStatus,
  setOrderStatus,
}) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value
    if (order) {
      setOrderStatus(order.id, newStatus)
    }
  }

  return (
    <ModalOverlay>
      <ModalContent>
        {order && (
          <div>
            <ModalHeader>
              <Image src={delivery} />
              <ModalHeaderId>
                <Text $bold>ID: {order.id}</Text>
              </ModalHeaderId>
            </ModalHeader>
            <ModalBody>
              <TextArea>
                <Text $bold>Nome do Cliente: </Text>
                <Text>{order.customerName}</Text>
              </TextArea>
              <TextArea>
                <Text $bold>Endereço:</Text>
                <Text>{order.address}</Text>
              </TextArea>
              <TextArea>
                <Text $bold>Status:</Text>
                <Select value={selectedStatus} onChange={handleStatusChange}>
                  <SelectOption value="received">Pedido Recebido</SelectOption>
                  <SelectOption value="approved">Pedido Aprovado</SelectOption>
                  <SelectOption value="separation">Pedido em Separação</SelectOption>
                  <SelectOption value="sent">Pedido Enviado</SelectOption>
                  <SelectOption value="delivered">Pedido Entregue</SelectOption>
                </Select>
              </TextArea>
            </ModalBody>
          </div>
        )}
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
