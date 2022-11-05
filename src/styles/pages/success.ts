import { styled } from "..";

export const SuccessContainer = styled('main', {
  width: '100%',
  
  display: 'flex',
  flexDirection: 'column',  
  justifyContent: 'center',
  alignItems: 'center',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: "$xl",
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  },

  '@media (max-width: 600px)': {
    padding: '0 2rem',
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 52,

  div: {
    marginRight: -52
  }
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%);',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  width: 140,
  height: 140,
  borderRadius: 9999,
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})