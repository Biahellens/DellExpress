import React from "react"
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

import delivery from '../../assets/delivery.svg'

interface ModalProps {
  onClose: () => void;
}

const NewOrder: React.FC<ModalProps> = ({
  onClose
}) => {

  const handleSave = () => {
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
            <FormContent>
              <TextArea>
                <Text>Nome Completo(Destinário):</Text>
              </TextArea>
              <Input />
              <TextArea>
                <Text>Endereço:</Text>
              </TextArea>
              <Input />
            </FormContent>
            <ButtonContent>
              <Button onClick={handleSave}>Salvar</Button>
            </ButtonContent>
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