import React from 'react';
import { OrderTable } from '../../components'
import { Content, ContentTable, Logo, LogoImage, Text } from './style'
import logo from '../../assets/logo.svg'

function Home() {

  return (
    <div>
      <Logo>
        <LogoImage src={logo}/>
      </Logo>
      <Content>
        <Text>Suas Entregas</Text>
        <ContentTable>
          <OrderTable />
        </ContentTable>
      </Content>
    </div>

  );
}

export default Home;