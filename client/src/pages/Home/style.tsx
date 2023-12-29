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

export const ContentHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
  }
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

export const LoadingContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LoadingImage = styled.img`
  width: 70%;
  height: 70%;
`

export const ButtonNew = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #9ACD32;

  color: #F8F7F7;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`