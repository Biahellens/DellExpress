import React, { useState } from "react"
import {
  ModalOverlay,
  ModalContent,
  Button,
  CloseButton,
  Image,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Text,
  TextArea,
  FormContent,
  Input,
  ButtonContent
} from './style'

import delivery from '../../assets/delivery.svg';
import axios from "axios";

interface ModalProps {
  onClose: () => void;
}

const NewOrder: React.FC<ModalProps> = ({
  onClose
}) => {
  const [customerName, setCustomerName] = useState('');
  const [addressDelivery, setAddressDelivery] = useState('');
  const orderStatus = 'Pedido Realizado'

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const response = await axios.post('http://localhost:8080/orders', {
        customerName,
        addressDelivery,
        orderStatus
      })
    } catch(error){

    }
    onClose()
  }

  return(
    <ModalOverlay>
      <ModalContent>
        <>
          <ModalHeader>
            <Image src={delivery}/>
            <ModalTitle>
              <Text $bold>Adicionar Nova Entrega</Text>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormContent onSubmit={handleSave}>
              <TextArea>
                <Text>Nome Completo(Destinário):</Text>
              </TextArea>
              <Input
                type='text'
                placeholder="Nome Destinário"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <TextArea>
                <Text>Endereço da Entrega:</Text>
              </TextArea>
              <Input
                type='text'
                placeholder="Endereço "
                value={addressDelivery}
                onChange={(e) => setAddressDelivery(e.target.value)}
              />
              <ButtonContent>
                <Button type="submit">Salvar</Button>
              </ButtonContent>
            </FormContent>
          </ModalBody>
        </>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export {
  NewOrder
}