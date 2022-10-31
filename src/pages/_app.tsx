import { AppProps } from "next/app"
import Header from "../components/Header"
import { AppContainer } from "../styles/app"
import { globalStyles } from "../styles/global" 

import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_SECRET_KEY}
      currency="BRL"
      language="pt-BR"
      loading={<p>Loading</p>}
    >
      <AppContainer>
        <Header />

        <Component {...pageProps} />
      </AppContainer>
    </CartProvider>
  ) 
  
}