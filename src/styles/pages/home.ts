import { styled } from "..";

export const HomeContainer = styled('main', {
  paddingLeft: '2rem',
  display: 'flex',
  width: '100%',
  minHeight: 656,
  overflowX: 'hidden',

  a: {
    '&:first-child': {
      marginLeft: '-12rem',
    }
  }
})

export const Product = styled('div', {
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
      fontSize: '$lg',
      color: '$gray100',
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
  },
})

export const ArrowButton = styled('button', {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "8.5rem",
  height: "100%",
  background: "linear-gradient(270deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
  cursor: "pointer",
  border: "none",
  outline: "none",
  color: "$white",
  fill: "$white",
  padding: "0 1rem",

  'svg:hover': {
    transform: "scale(1.1)",
    transition: "all 0.2s"
  },

  variants: {
      direction: {
          left: {
              left: 0,
              textAlign: "left",
          },
          right: {
              right: 0,
              textAlign: "right",
              background:
                  "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
          },
      },
      disabled: {
          true: {
              opacity: 0,
              display: 0,
          },
      },
  },
})