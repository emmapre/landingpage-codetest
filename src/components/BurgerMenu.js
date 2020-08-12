import React from 'react'
import styled from 'styled-components/macro'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1b1b1d;
  color: #fff;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 50%;
    }

  a {
    font-size: 1.5rem;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
      margin: 20px;
    }
    &:hover {
      color: #eb5b51;
    }
  }
`

export const BurgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a>Link</a>
      <a>Link</a>
      <a>Link</a>
    </StyledMenu>
  )
}