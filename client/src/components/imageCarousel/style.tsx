import styled from 'styled-components'
import map from '../../assets/map.png'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 40px
`

export const ContentBackground = styled.div`
  width: 80%;
  height: 240px;
  background-image: url(${map});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 180px;
    border-radius: 15px;
  }
`

export const TextArea = styled.div`
  width: 100%;
  height: 160px;
  margin-left: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.text<{$bold?: boolean}>`
  width: 100%;
  font-size: 20px;
  font-weight: ${props => props.$bold ? 'bold' : ''};
`

export const Image = styled.img`
  width: 180px;
  height: 130px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 80px;
    margin-right: 10px;
  }
`