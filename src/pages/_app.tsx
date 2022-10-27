import { AppProps } from "next/app"
import Header from "../components/Header"
import { AppContainer } from "../styles/app"
import { globalStyles } from "../styles/global" 



globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppContainer>
      <Header />

      <Component {...pageProps} />
    </AppContainer>
  ) 
  
}