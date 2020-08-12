import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import { useOnClickOutside } from '../hooks/hooks'

import { ReactComponent as PentiaLogo } from '../assets/logo.svg'
import { Burger } from '../lib/Burger'
import { BurgerMenu } from './BurgerMenu'

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  height: 70px;
  background-color: #1b1b1d;

  @media (min-width: 768px){
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 100%;
    height: 100%;
    min-width: 70px;
  }
`

const BurgerContainer = styled.div`
  margin: 0 10px 0 0;

  @media (min-width: 768px){
    grid-row: 2/3;
    align-self: center;
    justify-self: center;
    margin: 0;
  }
`
const StyledPentiaLogo = styled(PentiaLogo)`
  margin: 0 0 0 10px;
  height: 35px;
  fill: #fff;

  @media (min-width: 768px){
    margin: 17.5px 0 0 0;
    grid-row: 1/2;
    align-self: flex-start;
    justify-self: center;
  }
`

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

