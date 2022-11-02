import Image from "next/image";
import { ImageContainer, ProductsContainer, SuccessContainer } from "../styles/pages/success";

import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart"
import { useEffect, useState } from "react";

interface SuccessProps {
  customerName: string
  products: {
    id: string
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const [successfulPurchase, setSuccessfulPurchase] = useState(true)

  const { clearCart } = useShoppingCart()

  if (successfulPurchase) {
    clearCart()
    setSuccessfulPurchase(false)
  }

  const productsAmount = products.length
  
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex"/>
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ProductsContainer>
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image 
                  src={product.imageUrl}
                  alt=""
                  width={115}
                  height={105}
                  placeholder="blur"
                  blurDataURL={product.imageUrl}
                />
              </ImageContainer>
            )
          })}
        </ProductsContainer>
        <p>Uhuul <strong>{customerName}</strong>, sua compra de <strong>{productsAmount}</strong> camisetas já está a caminho da sua casa. </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0]
    }
  })

  return {
    props: {
      customerName,
      products,
    }
  }
}