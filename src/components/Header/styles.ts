import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1232,
  padding: '2.5rem 2rem 2rem',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartContainer = styled('div', {
  backgroundColor: "$gray800",
  borderRadius: 6,
  position: 'relative',

  padding: 12,
  width: 48,
  height: 48,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',

  svg: {
    color: '$gray400',
  }, 

  span: {
    position: 'absolute',
    top: -7,
    right: -7,
    width: 24,
    height: 24,
    outline: '3px solid $gray900',
    borderRadius: 9999,

    fontSize: '0.875rem',
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$green500',
  }
})