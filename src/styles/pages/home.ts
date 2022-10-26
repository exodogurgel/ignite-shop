import { basename } from "path";
import { styled } from "..";

export const HomeContainer = styled('main', {
  paddingLeft: '2rem',
  display: 'flex',
  gap: '3rem',
  width: '100%',
  minHeight: 656,
  maxWidth: 'calc(100vw - ((100vw - 1232px) / 2))',
  marginLeft: 'auto',
  overflowX: 'hidden',
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    padding: '2rem',
    left: '0.25rem',
    right: '0.25rem',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    'strong': {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})