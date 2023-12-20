import styled from 'styled-components'

interface ThProps {
  $size?: 'small' | 'medium' | 'large';
}

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  background-color: #EEE8AA;
  border: none
`

export const Tbody = styled.tbody`
`

export const Tr = styled.tr`
  border: solid #ddd;
  border-width: 0 0 1px 0;
  padding: 8px;
  text-align: left;
`

export const Th = styled.th<ThProps>`
  width:  ${(props) => {
    switch (props.$size) {
      case 'small':
        return '12%';
      case 'medium':
        return '25%';
      case 'large':
        return '33%';
      default:
        return '30%';
    }
  }};
  padding: 8px;
  text-align: left;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Td = styled.td`
  padding: 8px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 2px;
  }
`

export const Text = styled.text`
  font-size: 20px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 10px;
    text-align: left;
    margin: 4px;
  }
`

export const Image = styled.img`
  width: 15px;
  height: 15px;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }

`