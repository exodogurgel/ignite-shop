import logoImg from "../../assets/logo.svg"
import { CartContainer, HeaderContainer } from "./styles"
import Image from "next/image"
import { Handbag } from "phosphor-react"

export default function Header () {
  const cartItems=["1"] 
  
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      
      <CartContainer>
        <Handbag size={24} weight="bold"/>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </CartContainer>
    </HeaderContainer>
  )
}