import React from 'react'
import styled from 'styled-components/macro'

const StyledBurger = styled.button`
  position: absolute;
  top: 5px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  span {
    width: 3rem;
    height: 0.20rem;
    background: ${({ open }) => open ? '#5d5d5d' : '#fff'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(35deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-35deg)' : 'rotate(0)'};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger aria-label="Toggle menu" open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}