import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, ImageContainer, Item, ItemsContainer, Title, } from './styles'
import Image from 'next/image'
import camiseta from '../../assets/camisa.png'

export default function ShoppingBag () {

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Content> 
        <Close> <X size={24} weight="bold"/> </Close>
        <Title>Sacola de compras</Title>
        <ItemsContainer>
          <Item>
            <ImageContainer>
              <Image 
                src={camiseta}
                alt=""
                width={95}
                height={95}
              />
            </ImageContainer>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </Item>
          <Item>
            <ImageContainer>
              <Image 
                src={camiseta}
                alt=""
                width={95}
                height={95}
              />
            </ImageContainer>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </Item>
          <Item>
            <ImageContainer>
              <Image 
                src={camiseta}
                alt=""
                width={95}
                height={95}
              />
            </ImageContainer>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </Item>
        </ItemsContainer>
        <footer>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div>
            <span>Valor total</span>
            <strong>R$ 270,00</strong>
          </div>
          
          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}