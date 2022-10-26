import { HomeContainer, Product } from "../styles/pages/home";

import camisaImg from '../assets/camisa.png'
import Image from "next/image";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image 
          src={camisaImg}
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image 
          src={camisaImg}
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
