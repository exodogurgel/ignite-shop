import { styled } from "..";

export const ProductContainer = styled('main', {
  width: '100%',
  maxWidth: 1232,
  margin: '0 auto',
  padding: '0 2rem',
  minHeight: 656,

  display: 'flex',
  gap: '4.5rem',
  alignItems: 'stretch'
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  maxWidth: 520,
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    marginTop: '1.75rem',
    color: '$gray300',
  },

  span: {
    fontSize: '$2xl',
    marginTop: '1rem',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    width: '100%',
    padding: '1.25rem',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1.125rem',
    transition: 'background-color 0.2s', 

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})