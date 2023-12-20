import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Logo = styled.div`
  padding: 20px;
`

export const LogoImage = styled.img`
  width: 180px;
`

export const ContentTable = styled.div`
  width:80%;
  margin-top: 20px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const Text = styled.text`
  width: 80%;
  font-size: 24px;
  margin: 10px;
`