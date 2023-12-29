import React from "react"
import { ModalOverlay, ModalContent, Button, CloseButton, Image, ModalBody, ModalHeader, ModalTitle, Text, TextArea } from './style'

import delivery from '../../assets/delivery.svg'

interface ModalProps {
  onClose: () => void;
}

const NewOrder: React.FC<ModalProps> = ({
  onClose
}) => {

  return(
    <ModalOverlay>
      <ModalContent>
        <>
          <ModalHeader>
            <Image src={delivery}/>
            <ModalTitle>
              <Text $bold>Adicionar novo Pedido</Text>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <TextArea>
              <Text>oi</Text>
            </TextArea>
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