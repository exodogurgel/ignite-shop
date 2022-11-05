import logoImg from "../../assets/logo.svg"
import { BagContainer, HeaderContainer } from "./styles"
import Image from "next/image"
import { Handbag } from "phosphor-react"

import * as Dialog from '@radix-ui/react-dialog'
import ShoppingBag from "../ShoppingBag"
import { useShoppingCart } from "use-shopping-cart"
import Link from "next/link"

export default function Header () {
  const { cartCount } = useShoppingCart()
  
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      
       <Dialog.Root>
        <BagContainer>
          <Handbag 
            size={24} 
            weight="bold" 
            color={cartCount ? '#FFF': '#8D8D99'}
          />
          {cartCount > 0 && <span>{cartCount}</span>}
        </BagContainer>

        <ShoppingBag/>
      </Dialog.Root>  
    </HeaderContainer>
  )
}