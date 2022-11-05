import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { Product as IProduct } from "use-shopping-cart/core"

export default function Product({ product }: IProduct) {
  const [isAddedItemToCart, setIsAddedItemToCart] = useState(false)
  const { addItem, cartDetails,  } = useShoppingCart()

  const cart = Object.values(cartDetails ?? {}).map((cartItem: IProduct) => cartItem)

  const { isFallback } = useRouter()
  
  if (isFallback) {
    return <p>Loading...</p>
  }

  async function handleAddProductToCart() {
    try {
      setIsAddedItemToCart(true)

      if (cart.find(item => item.id === product.id)) {
        return alert("Esse produto ja está no carrinho")
      }

      addItem(product)

    } catch (error) {
      console.log(error)
    } finally {
      setIsAddedItemToCart(false)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
    
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt=""
            width={520}
            height={480}
            placeholder="blur" 
            blurDataURL={product.imageUrl}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            { formatCurrencyString(
                {
                  value: product.price,
                  currency: product.currency,
                }
              )
            }
          </span>
          
          <p>{product.description}</p>

          <button 
            disabled={isAddedItemToCart} 
            onClick={handleAddProductToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: 'prod_MfV8y6IRRvSAPp'}}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        currency: price.currency,
        description: product.description,
        price_id: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}