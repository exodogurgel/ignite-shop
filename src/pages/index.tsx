import { ArrowButton, HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camisaImg from '../assets/camisa.png'
import Image from "next/image";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface ArrowProps {
  left?: boolean
  disabled: boolean
  onClick: (e: any) => void
}

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2.2,
      spacing: 48,
      origin: 'center',
    },
    initial: 0,
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
    },
    created() {
        setLoaded(true);
    },
  })

  function Arrow(props: ArrowProps) {
    return (
      <ArrowButton
        direction={props.left ? "left" : "right"}
        disabled={props.disabled}
      >
        <svg
          onClick={props.onClick}
          width="48"
          height="48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          {props.left && (
              <path d="M31.0607 7.93934C30.4749 7.35355 29.5251 7.35355 28.9393 7.93934L13.9393 22.9393C13.3536 23.5251 13.3536 24.4749 13.9393 25.0607L28.9393 40.0607C29.5251 40.6464 30.4749 40.6464 31.0607 40.0607C31.6464 39.4749 31.6464 38.5251 31.0607 37.9393L17.1213 24L31.0607 10.0607C31.6464 9.47487 31.6464 8.52513 31.0607 7.93934Z" fill="#C4C4CC"/>
          )}
          {!props.left && (
              <path d="M16.9393 7.93934C17.5251 7.35355 18.4749 7.35355 19.0607 7.93934L34.0607 22.9393C34.6464 23.5251 34.6464 24.4749 34.0607 25.0607L19.0607 40.0607C18.4749 40.6464 17.5251 40.6464 16.9393 40.0607C16.3536 39.4749 16.3536 38.5251 16.9393 37.9393L30.8787 24L16.9393 10.0607C16.3536 9.47487 16.3536 8.52513 16.9393 7.93934Z" fill="#C4C4CC"/>
          )}
        </svg>
      </ArrowButton>
    );
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image 
              src={product.imageUrl}
              alt=""
              width={520}
              height={480}
              placeholder="blur" 
              blurDataURL={product.imageUrl}
            />
    
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )
      }
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    }
  })

  return {
    props: {
      products
    }
  }
}