import React, { useState, } from 'react'
import styled from 'styled-components'
import { Burger } from '../lib/Burger'
import { BurgerMenu } from './BurgerMenu'
import logo from '../assets/logo.svg'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100px;
  background-color: #FBC4C4;
`

const LogoTitleContainer = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px;
`

// const StyledLink = styled(Link)`
//   color: #000;
//   text-decoration: none;

// `

// const StyledNavLink = styled(NavLink)`
//     color: #000;
//     text-decoration: none;
//     &:hover{
//       text-decoration: underline;
//     }
//     &.active {
//       text-decoration: underline;
//   }
// `

const Title = styled.h1`
  margin: 0 0 0 20px;
  font-size: 30px;
  @media (min-width: 768px){
    font-size: 40px;
  }
`

const BurgerContainer = styled.div`
  @media(min-width: 768px){
    display: none;
  }
`

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <Logo src={logo} alt='logo' />
      <BurgerContainer>
        <Burger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </BurgerContainer>
    </header>
  )
}

