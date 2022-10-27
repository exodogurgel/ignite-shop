import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

import camisetaImg from '../assets/camisa.png'
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image 
          src={camisetaImg}
          alt=""
          width={115}
          height={105}
          placeholder="blur"
          //blurDataURL={camisetaImg}
        />
      </ImageContainer>
      <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}