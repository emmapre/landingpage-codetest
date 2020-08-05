import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #C9E0DC;
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
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #343078;
    }
  }
`

export const BurgerMenu = ({ open }) => {

  return (
    <StyledMenu open={open}>
      {/* <Link to='/hero'>Hero</Link>
      <Link to='/info'>Info</Link>
      <Link to='/form'>Form</Link> */}
    </StyledMenu>
  )
}