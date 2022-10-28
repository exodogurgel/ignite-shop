import logoImg from "../../assets/logo.svg"
import { BagContainer, HeaderContainer } from "./styles"
import Image from "next/image"
import { Handbag } from "phosphor-react"

import * as Dialog from '@radix-ui/react-dialog'
import ShoppingBag from "../ShoppingBag"

export default function Header () {
  const bagItems=["1"] 
  const bagIsNotEmpty = bagItems.length > 0
  
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      
       <Dialog.Root>
        <BagContainer>
          <Handbag 
            size={24} 
            weight="bold" 
            color={bagIsNotEmpty ? '#FFF': '#8D8D99'}
          />
          {bagIsNotEmpty && <span>{bagItems.length}</span>}
        </BagContainer>

        <ShoppingBag/>
      </Dialog.Root>  
    </HeaderContainer>
  )
}