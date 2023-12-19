import React from 'react';
import { OrderTable } from '../../components'
import { Content, ContentTable, Logo, LogoImage } from './style'
import logo from '../../assets/logo.svg'

function Home() {

  return (
    <div>
      <Logo>
        <LogoImage src={logo}/>
      </Logo>
      <Content>
        <p>Olá</p>
        <ContentTable>
          <OrderTable />
        </ContentTable>
      </Content>
    </div>

  );
}

export default Home;