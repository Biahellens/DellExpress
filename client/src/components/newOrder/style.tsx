import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 380px;
  height: 600px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
  display: relative;
  flex-flow: column;
  position: absolute;

  @media (max-width: 768px) {
    width: 280px;
    height: 600px;
  }
`

export const ModalHeader = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;

  background-color: #9ACD32;
  display: flex;
  justify-content: center;
  position: relative;
`

export const ModalTitle = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 90%;
  transform: translateY(-50%);

  border-radius: 15px;
  background-color: #F8F7F7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Text = styled.text<{$bold?: boolean}>`
  width: 100%;
  font-size: 20px;
  font-weight: ${props => props.$bold ? 'bold' : ''};
`

export const TextArea = styled.div`
  height: 60px;
  display: flex;
  flex-flow: column;
`

export const ModalBody = styled.div`
  width: 80%;
  height: auto;

  margin-top: 40px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;
`

export const Image = styled.img`
  width: 180px;
  height: 130px;
  margin-top: 10px;
`

export const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #333;
  outline: none;
`

export const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  height: 40px;
  background-color: #6B8E23;
  color: #FFFFFF;
  font-size:12px;
  border: 2px solid #6B8E23;
  border-radius: 20px;
  cursor: pointer
`