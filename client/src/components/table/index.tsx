import React from 'react';
import { Content, Text, Table, Tbody, Thead, Td, Tr, Th, Image } from './style'

import received from '../../assets/received.svg'
import approved from '../../assets/approved.svg'
import separation from '../../assets/separation.svg'
import sent from '../../assets/sent.svg'
import delivered from '../../assets/delivered.svg'

function OrderTable() {

  return (
    <Content>
      <Table>
        <Thead>
          <Tr>
            <Th  $size="small">
              ID
            </Th>
            <Th $size="large">
              NOME DO CLIENTE
            </Th>
            <Th>
              ENDEREÇO
            </Th>
            <Th $size="medium">
              STATUS
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text>485752</Text>
            </Td>
            <Td>
              <Text>Daniela Matos</Text>
            </Td>
            <Td>
              <Text>Mogi Guaçu</Text>
            </Td>
            <Td>
              <Image src={received} />
              <Text>
                Pedido Recebido
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>4853452</Text>
            </Td>
            <Td>
              <Text>Regiane Matos</Text>
            </Td>
            <Td>
              <Text>Mogi Guaçu</Text>
            </Td>
            <Td>
              <Image src={approved} />
              <Text>
                Pedido Aprovado
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>4853452</Text>
            </Td>
            <Td>
              <Text>Regiane Matos</Text>
            </Td>
            <Td>
              <Text>Mogi Guaçu</Text>
            </Td>
            <Td>
              <Image src={separation} />
              <Text>
                Pedido em Separação
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>4853452</Text>
            </Td>
            <Td>
              <Text>Regiane Matos</Text>
            </Td>
            <Td>
              <Text>Mogi Guaçu</Text>
            </Td>
            <Td>
              <Image src={sent} />
              <Text>
                Pedido Enviado
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>4853452</Text>
            </Td>
            <Td>
              <Text>Regiane Matos</Text>
            </Td>
            <Td>
              <Text>Mogi Guaçu</Text>
            </Td>
            <Td>
              <Image src={delivered} />
              <Text>
                Pedido Entregue
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Content>
  );
}

export default OrderTable;