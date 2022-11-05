import { AppProps } from "next/app"
import Header from "../components/Header"
import { AppContainer } from "../styles/app"
import { globalStyles } from "../styles/global" 

import { CartProvider } from 'use-shopping-cart'
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.min.css'; 
import { Toaster } from 'react-hot-toast';

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
      <Toaster 
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: {
            padding: '16px 20px',
            background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
            boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
            color: '#000',
          },
        }}
      />
    </CartProvider>
  ) 
  
}