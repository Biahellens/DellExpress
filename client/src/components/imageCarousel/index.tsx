import React from 'react'
import { Content, ContentBackground, TextArea, Text, Image } from './style'

import delivery from '../../assets/tracking.svg'

function ImageCarousel() {

  return (
    <Content>
      <ContentBackground>
        <TextArea>
          <Text>A MELHOR ESCOLHA PARA</Text>
          <Text $bold>SUA ENTREGA</Text>
        </TextArea>
        <Image src={delivery} />
      </ContentBackground>
    </Content>

  )
}

export default ImageCarousel