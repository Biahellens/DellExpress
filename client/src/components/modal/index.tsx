import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ModalOverlay, ModalContent, ModalHeader, ModalHeaderId, TextArea, Text, ModalBody, Image, CloseButton, Select, SelectOption, Button } from './style'
import delivery from '../../assets/delivery.svg'
import Order from './interface'
import { setOrderStatus } from './orderStatus/orderActions'
import { RootState } from './orderStatus/store'

interface ModalProps {
  order: Order | null
  onClose: () => void
}

const mapStateToProps = (state: RootState) => ({
  selectedStatus: state.order.selectedStatus,
})

const mapDispatchToProps = {
  setOrderStatus,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const Modal: React.FC<ModalProps & PropsFromRedux> = ({
  order,
  onClose,
  selectedStatus,
  setOrderStatus,
}) => {
  const [newStatus, setNewStatus] = React.useState(selectedStatus)

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value
    setNewStatus(status)
  }

  const handleSave = () => {
    if (order) {
      setOrderStatus(order.id, newStatus)
    }

    onClose()
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
                <Text>{order.addressDelivery}</Text>
              </TextArea>
              <TextArea>
                <Text $bold>Status:</Text>
                <Select value={newStatus} onChange={handleStatusChange}>
                  <SelectOption value="Pedido Recebido">Pedido Recebido</SelectOption>
                  <SelectOption value="Pedido Aprovado">Pedido Aprovado</SelectOption>
                  <SelectOption value="Pedido em Separação">Pedido em Separação</SelectOption>
                  <SelectOption value="Pedido Enviado">Pedido Enviado</SelectOption>
                  <SelectOption value="Pedido Entregue">Pedido Entregue</SelectOption>
                </Select>
              </TextArea>
              <Button onClick={handleSave}>Salvar</Button>
            </ModalBody>
          </div>
        )}
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default connector(Modal)