import logoImg from "../../assets/logo.svg"
import { BagContainer, HeaderContainer } from "./styles"
import Image from "next/image"
import { Handbag } from "phosphor-react"

import * as Dialog from '@radix-ui/react-dialog'
import ShoppingBag from "../ShoppingBag"
import { useShoppingCart } from "use-shopping-cart"

export default function Header () {
  const { cartCount } = useShoppingCart()
  
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      
       <Dialog.Root>
        <BagContainer>
          <Handbag 
            size={24} 
            weight="bold" 
            color={cartCount ? '#FFF': '#8D8D99'}
          />
          {cartCount && <span>{cartCount}</span>}
        </BagContainer>

        <ShoppingBag/>
      </Dialog.Root>  
    </HeaderContainer>
  )
}