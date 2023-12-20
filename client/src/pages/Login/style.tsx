import styled from 'styled-components'

import map  from '../../assets/image_60.svg'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0;
`

export const LogoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LogoImage = styled.img`
  width: 180px;
`

export const ContentText = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }

`

export const TextArea = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`

export const ContentImage = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    background-color: #9ACD32;
  }
`

export const Image = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    background-image: url(${map});
    background-size: cover;
  }
`

export const Text = styled.h1`
  color: #FF8C00;
  text-align: center;
  width: 100%;
`
export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #6B8E23;
  color: #FFFFFF;
  font-size:12px;
  border: 2px solid #6B8E23;
  border-radius: 20px;
  cursor: pointer
`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 20px;
`

export const Input = styled.input<{ $size?: boolean; }>`
  width: 420px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #FFFFFF;
  border: 2px solid #6B8E23;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 12px;

  @media (max-width: 768px) {
    width: 320px;
  }
`