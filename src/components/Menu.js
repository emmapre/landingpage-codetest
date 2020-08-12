import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import { useOnClickOutside } from '../hooks/hooks'

import { Burger } from '../lib/Burger'
import { BurgerMenu } from './BurgerMenu'
import { ReactComponent as PentiaLogo } from '../assets/logo.svg'

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 70px;
  background-color: #1b1b1d;

  @media (min-width: 768px){
    flex-direction: column;
    height: 100%;
    width: 120px;
    position: fixed;
    top: 0;
    left: 0;
  }
}
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

const BurgerContainer = styled.div`
  
`

const StyledPentiaLogo = styled(PentiaLogo)`
  height: 30px;
  fill: #fff;
`


//svart färg 1b1b1d

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false))

  return (
    <StyledNavbar>
      <StyledPentiaLogo />
      <BurgerContainer ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <BurgerMenu open={open} setOpen={setOpen} id={menuId} />
      </BurgerContainer>
    </StyledNavbar>
  )
}

